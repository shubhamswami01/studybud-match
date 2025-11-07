import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Users, BookOpen, Star } from 'lucide-react';
import { toast } from 'sonner';

const TeacherDashboard = () => {
  const [subjects, setSubjects] = useState<string[]>(['Mathematics', 'Physics']);
  const [newSubject, setNewSubject] = useState('');
  const [stats] = useState({
    totalStudents: 45,
    activeConnections: 12,
    rating: 4.8,
  });

  const handleAddSubject = () => {
    if (newSubject.trim() && !subjects.includes(newSubject.trim())) {
      setSubjects([...subjects, newSubject.trim()]);
      setNewSubject('');
      toast.success('Subject added successfully!');
    }
  };

  const handleRemoveSubject = (subject: string) => {
    setSubjects(subjects.filter((s) => s !== subject));
    toast.success('Subject removed');
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
            <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your teaching profile and connect with students
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalStudents}</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeConnections}</div>
                <p className="text-xs text-muted-foreground">Current teaching sessions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <Star className="h-4 w-4 text-accent fill-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.rating}/5.0</div>
                <p className="text-xs text-muted-foreground">Based on 23 reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Subjects Management */}
          <Card>
            <CardHeader>
              <CardTitle>My Subjects</CardTitle>
              <CardDescription>
                Manage the subjects you teach. Students can find you by searching these subjects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Subjects */}
              <div>
                <Label className="mb-3 block">Current Subjects</Label>
                <div className="flex flex-wrap gap-2">
                  {subjects.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No subjects added yet</p>
                  ) : (
                    subjects.map((subject) => (
                      <Badge key={subject} variant="secondary" className="text-sm py-1.5 px-3">
                        {subject}
                        <button
                          onClick={() => handleRemoveSubject(subject)}
                          className="ml-2 hover:text-destructive transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))
                  )}
                </div>
              </div>

              {/* Add New Subject */}
              <div className="space-y-2">
                <Label htmlFor="newSubject">Add New Subject</Label>
                <div className="flex gap-2">
                  <Input
                    id="newSubject"
                    placeholder="e.g., Chemistry, History, Guitar..."
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSubject()}
                  />
                  <Button onClick={handleAddSubject}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Student Requests */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Student Requests</CardTitle>
              <CardDescription>Students who have shown interest in your teaching</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Alex Johnson', subject: 'Mathematics', time: '2 hours ago' },
                  { name: 'Emma Davis', subject: 'Physics', time: '5 hours ago' },
                  { name: 'Michael Brown', subject: 'Mathematics', time: '1 day ago' },
                ].map((request, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                        {request.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{request.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Interested in {request.subject}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{request.time}</span>
                      <Button size="sm">Respond</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
