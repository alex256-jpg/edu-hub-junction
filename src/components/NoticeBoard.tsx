
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Bell } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: "Term 3 Registration Begins",
    date: "August 15, 2023",
    content: "Registration for Term 3 will begin on August 20. All students are required to complete their registration by August 30.",
    isImportant: true
  },
  {
    id: 2,
    title: "Parents-Teachers Meeting",
    date: "September 5, 2023",
    content: "There will be a parents-teachers meeting on September 10 at 2:00 PM in the school auditorium.",
    isImportant: false
  },
  {
    id: 3,
    title: "National Examination Preparation",
    date: "September 12, 2023",
    content: "Special classes for national examination preparation will begin on September 15. All O-level and A-level candidates must attend.",
    isImportant: true
  },
];

const NoticeBoard = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-school-primary">Notice Board</h2>
          <a href="/notice-board" className="text-school-primary hover:text-school-secondary font-medium flex items-center">
            View All Notices
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className={`${notice.isImportant ? 'bg-red-50' : 'bg-gray-50'}`}>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{notice.title}</CardTitle>
                  {notice.isImportant && (
                    <Bell className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <CardDescription className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {notice.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p>{notice.content}</p>
              </CardContent>
              <CardFooter>
                <a href={`/notice/${notice.id}`} className="text-sm text-school-primary hover:text-school-secondary">
                  Read more
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
