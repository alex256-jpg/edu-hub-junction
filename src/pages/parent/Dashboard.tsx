
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, CreditCard, Calendar, Bell, Clock, AlertCircle } from 'lucide-react';

const ParentDashboard = () => {
  // Sample data for children
  const children = [
    { 
      id: 1, 
      name: 'Mary Doe', 
      admissionNo: 'S21008', 
      class: 'Senior 2',
      attendance: '98%',
      feeBalance: 'UGX 50,000',
      averageGrade: 'B+' 
    },
    { 
      id: 2, 
      name: 'James Doe', 
      admissionNo: 'S23001', 
      class: 'Senior 1',
      attendance: '94%',
      feeBalance: 'UGX 0',
      averageGrade: 'A-' 
    }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2023-11-25', time: '2:00 PM - 4:00 PM', type: 'meeting' },
    { id: 2, title: 'End of Term Exams', date: '2023-11-30', time: 'All Day', type: 'exam' },
    { id: 3, title: 'School Closing Day', date: '2023-12-10', time: '10:00 AM - 12:00 PM', type: 'event' },
  ];

  const recentAnnouncements = [
    { id: 1, title: 'Fee Payment Reminder', date: '2023-11-15', content: 'Please clear all outstanding balances before the end of term exams.' },
    { id: 2, title: 'Holiday Schedule', date: '2023-11-10', content: 'School holidays will begin on December 11th. Classes resume on January 15th.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Parent Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome, Mr. & Mrs. Doe. Here's the overview of your children's education.
        </p>
      </div>

      <div className="space-y-6">
        {children.map((child) => (
          <Card key={child.id} className="overflow-hidden">
            <CardHeader className="bg-blue-50 flex flex-row items-center gap-4 pb-6">
              <Avatar className="h-16 w-16 border-2 border-white shadow">
                <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                  {child.name.charAt(0)}
                </AvatarFallback>
                <AvatarImage src="" />
              </Avatar>
              <div>
                <CardTitle>{child.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <span>{child.admissionNo}</span>
                  <span className="mx-2">•</span>
                  <span>{child.class}</span>
                </div>
              </div>
              <Button className="ml-auto" variant="outline" size="sm">View Details</Button>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Attendance</span>
                  <span className="text-xl font-semibold">{child.attendance}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Average Grade</span>
                  <span className="text-xl font-semibold">{child.averageGrade}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Fee Balance</span>
                  <span className="text-xl font-semibold">
                    {child.feeBalance === 'UGX 0' ? (
                      <span className="text-green-600">{child.feeBalance}</span>
                    ) : (
                      <span className="text-amber-600">{child.feeBalance}</span>
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={18} />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      event.type === 'meeting'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : event.type === 'exam'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-green-50 text-green-700 border-green-200'
                    }
                  >
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
    </div>
  );
};

export default ParentDashboard;
