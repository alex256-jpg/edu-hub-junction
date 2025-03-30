
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Clock, FileText, Bell, CheckCircle } from 'lucide-react';

const TeacherDashboard = () => {
  // Sample data
  const upcomingClasses = [
    { id: 1, subject: 'Mathematics', class: 'Senior 3', time: '8:00 AM - 9:30 AM', room: 'Room 101' },
    { id: 2, subject: 'Mathematics', class: 'Senior 2', time: '10:00 AM - 11:30 AM', room: 'Room 102' },
    { id: 3, subject: 'Mathematics', class: 'Senior 4', time: '1:00 PM - 2:30 PM', room: 'Room 103' },
  ];

  const assignmentsToGrade = [
    { id: 1, title: 'Algebra Homework', class: 'Senior 3', submissions: 28, total: 30 },
    { id: 2, title: 'Quadratic Equations', class: 'Senior 4', submissions: 25, total: 25 },
    { id: 3, title: 'Geometry Basics', class: 'Senior 2', submissions: 20, total: 28 },
  ];

  const recentAnnouncements = [
    { id: 1, title: 'Staff Meeting', date: '2023-11-20', content: 'Staff meeting scheduled for Monday at 3:30 PM.' },
    { id: 2, title: 'End of Term Exams', date: '2023-11-15', content: 'Please submit all exam questions by November 20th.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back, Ms. Sarah Williams. Here's your teaching overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Classes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Classes this term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">143</div>
            <p className="text-xs text-muted-foreground">Across all classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
            <FileText className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">Submissions to grade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Scheduled today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock size={18} />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <h3 className="font-medium">{cls.subject}</h3>
                    <p className="text-sm text-muted-foreground">{cls.class} • {cls.room}</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {cls.time}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText size={18} />
              Assignments to Grade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignmentsToGrade.map((assignment) => (
                <div key={assignment.id} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{assignment.title}</h3>
                    <Button size="sm" variant="outline">Grade</Button>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{assignment.class}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <CheckCircle size={14} className="text-green-600" />
                      <span>{assignment.submissions}/{assignment.total} submissions</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell size={18} />
            Recent Announcements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAnnouncements.map((announcement) => (
              <div key={announcement.id} className="border-b pb-3 last:border-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-md">{announcement.title}</h3>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock size={12} className="mr-1" />
                    {announcement.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;
