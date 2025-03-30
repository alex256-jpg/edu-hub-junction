
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, CreditCard, Calendar, Bell, Clock } from 'lucide-react';

const Dashboard = () => {
  // Sample statistics data
  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Teachers', value: '56', icon: BookOpen, color: 'bg-green-500' },
    { title: 'Fees Collected', value: 'UGX 24.5M', icon: CreditCard, color: 'bg-amber-500' },
    { title: 'Upcoming Events', value: '8', icon: Calendar, color: 'bg-purple-500' },
  ];

  const recentAnnouncements = [
    { id: 1, title: 'End of Term Exams', date: '2023-11-15', content: 'End of term examinations will commence on November 15th.' },
    { id: 2, title: 'Parents Meeting', date: '2023-10-28', content: 'Annual parents meeting scheduled for October 28th.' },
    { id: 3, title: 'Sports Day', date: '2023-11-05', content: 'Annual sports day will be held on November 5th.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, Admin</h2>
        <p className="text-muted-foreground">
          Here's what's happening across your school today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`${stat.color} p-2 rounded-md text-white`}>
                <stat.icon size={16} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
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
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard size={18} />
              Fee Collection Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Expected</span>
                <span className="font-semibold">UGX 45,000,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Collected</span>
                <span className="font-semibold text-green-600">UGX 24,500,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Outstanding</span>
                <span className="font-semibold text-red-500">UGX 20,500,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-school-primary h-2.5 rounded-full" style={{ width: '54%' }}></div>
              </div>
              <div className="text-sm text-muted-foreground text-right">54% Collected</div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Senior 4 - Mathematics</span>
                <span>Nov 15</span>
              </div>
              <div className="flex justify-between">
                <span>Senior 6 - Physics</span>
                <span>Nov 16</span>
              </div>
              <div className="flex justify-between">
                <span>Senior 3 - English</span>
                <span>Nov 17</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">Active</div>
              <div className="text-sm text-muted-foreground">Expires in: 45 days</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <div className="text-sm text-muted-foreground">Current Plan: Term Subscription</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>New Student Registrations</span>
                <span>5</span>
              </div>
              <div className="flex justify-between">
                <span>Reports Generated</span>
                <span>12</span>
              </div>
              <div className="flex justify-between">
                <span>SMS Sent Today</span>
                <span>45</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
