
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Clock, FileText, Bell, CheckCircle, AlertCircle } from 'lucide-react';

const StudentDashboard = () => {
  // Sample data
  const upcomingAssignments = [
    { id: 1, subject: 'Mathematics', title: 'Algebra Homework', dueDate: '2023-11-20', status: 'pending' },
    { id: 2, subject: 'Physics', title: 'Newton\'s Laws Practice', dueDate: '2023-11-22', status: 'pending' },
    { id: 3, subject: 'English', title: 'Essay Submission', dueDate: '2023-11-18', status: 'submitted' },
  ];

  const examSchedule = [
    { id: 1, subject: 'Mathematics', date: '2023-11-25', time: '9:00 AM', room: 'Room 101' },
    { id: 2, subject: 'Physics', date: '2023-11-27', time: '11:00 AM', room: 'Room 102' },
    { id: 3, subject: 'English', date: '2023-11-29', time: '9:00 AM', room: 'Room 103' },
  ];

  const recentAnnouncements = [
    { id: 1, title: 'End of Term Exams', date: '2023-11-15', content: 'End of term examinations will commence on November 25th.' },
    { id: 2, title: 'Sports Day', date: '2023-11-05', content: 'Annual sports day will be held on November 20th.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back, John Doe. Here's your academic overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">This term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">B+</div>
            <p className="text-xs text-muted-foreground">Current term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Fees Balance</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">UGX 50,000</div>
            <p className="text-xs text-muted-foreground">Due by 30th Nov</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Pending submission</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText size={18} />
              Upcoming Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <h3 className="font-medium">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Due: {assignment.dueDate}
                    </span>
                    {assignment.status === 'submitted' ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle size={12} className="mr-1" /> Submitted
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        <Clock size={12} className="mr-1" /> Pending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={18} />
              Upcoming Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {examSchedule.map((exam) => (
                <div key={exam.id} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{exam.subject}</h3>
                    <span className="text-xs text-muted-foreground">
                      {exam.date}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={12} />
                    <span>{exam.time}</span>
                    <span>•</span>
                    <span>{exam.room}</span>
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

export default StudentDashboard;
