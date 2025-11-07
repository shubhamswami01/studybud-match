import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Star, BookOpen, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  rating: number;
  studentsCount: number;
  bio: string;
  avatar?: string;
}

// Mock data for teachers
const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    subjects: ['Mathematics', 'Physics'],
    rating: 4.9,
    studentsCount: 127,
    bio: 'PhD in Mathematics with 10+ years of teaching experience.',
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    subjects: ['Computer Science', 'Programming'],
    rating: 4.8,
    studentsCount: 203,
    bio: 'Former Google engineer, passionate about teaching coding.',
  },
  {
    id: '3',
    name: 'Emma Williams',
    subjects: ['English', 'Literature'],
    rating: 4.7,
    studentsCount: 95,
    bio: 'Published author and English literature enthusiast.',
  },
  {
    id: '4',
    name: 'Carlos Rodriguez',
    subjects: ['Spanish', 'History'],
    rating: 4.9,
    studentsCount: 156,
    bio: 'Native Spanish speaker with a passion for history.',
  },
];

const StudentDashboard = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTeachers(mockTeachers);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleContact = (teacherName: string) => {
    toast.success(`Request sent to ${teacherName}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Your Perfect Teacher</h1>
            <p className="text-muted-foreground">
              Browse through our qualified teachers and start your learning journey
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by subject or teacher name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Teachers Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-muted rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredTeachers.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No teachers found matching your search.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold">
                          {teacher.name.charAt(0)}
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="font-medium">{teacher.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{teacher.name}</CardTitle>
                      <CardDescription>{teacher.studentsCount} students</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{teacher.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {teacher.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        className="w-full"
                        variant="default"
                        onClick={() => handleContact(teacher.name)}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Teacher
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;
