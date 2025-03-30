
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, AlertTriangle, Info, Users } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: "Term 3 Registration Begins",
    date: "August 15, 2023",
    category: "academic",
    content: "Registration for Term 3 will begin on August 20. All students are required to complete their registration by August 30. Please ensure that all outstanding fees are cleared before registration. The school administration office will be open from 8:00 AM to 4:00 PM on weekdays for registration.",
    isImportant: true
  },
  {
    id: 2,
    title: "Parents-Teachers Meeting",
    date: "September 5, 2023",
    category: "events",
    content: "There will be a parents-teachers meeting on September 10 at 2:00 PM in the school auditorium. All parents are encouraged to attend this important meeting to discuss student progress and upcoming school activities. The agenda includes academic performance review, school development projects, and preparation for national examinations.",
    isImportant: false
  },
  {
    id: 3,
    title: "National Examination Preparation",
    date: "September 12, 2023",
    category: "academic",
    content: "Special classes for national examination preparation will begin on September 15. All O-level and A-level candidates must attend. The classes will run from 3:00 PM to 5:00 PM every weekday. Subject teachers will provide detailed schedules. Please bring all necessary materials including past papers and revision guides.",
    isImportant: true
  },
  {
    id: 4,
    title: "School Sports Day",
    date: "October 5, 2023",
    category: "events",
    content: "Annual sports day will be held on October 15 at the school grounds. All students are expected to participate in at least one event. Registration for different sports categories will begin next week. Parents are invited to attend and cheer for their children.",
    isImportant: false
  },
  {
    id: 5,
    title: "Fee Structure Update",
    date: "October 10, 2023",
    category: "administrative",
    content: "The school board has approved a new fee structure for the next academic year. Details have been sent to all parents via email. For any clarification, please contact the accounts office during working hours.",
    isImportant: true
  },
  {
    id: 6,
    title: "Library Hours Extended",
    date: "October 18, 2023",
    category: "administrative",
    content: "The school library will now be open until 6:00 PM on weekdays to accommodate students preparing for examinations. A teacher will be available to assist with research and study questions during these extended hours.",
    isImportant: false
  },
  {
    id: 7,
    title: "COVID-19 Safety Protocols",
    date: "October 20, 2023",
    category: "health",
    content: "This is a reminder about the importance of following COVID-19 safety protocols. All students and staff must wear masks in common areas, sanitize regularly, and maintain physical distancing whenever possible. Anyone experiencing symptoms should stay home and inform the school administration.",
    isImportant: true
  },
  {
    id: 8,
    title: "Career Guidance Workshop",
    date: "November 2, 2023",
    category: "events",
    content: "A career guidance workshop will be held for Senior 4 and Senior 6 students on November 10. Representatives from various universities and professionals from different fields will be present to provide information and answer questions about career paths.",
    isImportant: false
  },
];

const NoticeBoard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-school-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Notice Board</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Stay updated with the latest announcements, events, and important information from EduHub Junction.
            </p>
          </div>
        </div>
        
        {/* Notices Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8">
                <TabsList className="flex flex-wrap justify-center space-x-2">
                  <TabsTrigger value="all">All Notices</TabsTrigger>
                  <TabsTrigger value="important">Important</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="administrative">Administrative</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="health">Health & Safety</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 gap-6">
                  {notices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="important">
                <div className="grid grid-cols-1 gap-6">
                  {notices
                    .filter(notice => notice.isImportant)
                    .map((notice) => (
                      <NoticeCard key={notice.id} notice={notice} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="academic">
                <div className="grid grid-cols-1 gap-6">
                  {notices
                    .filter(notice => notice.category === 'academic')
                    .map((notice) => (
                      <NoticeCard key={notice.id} notice={notice} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="administrative">
                <div className="grid grid-cols-1 gap-6">
                  {notices
                    .filter(notice => notice.category === 'administrative')
                    .map((notice) => (
                      <NoticeCard key={notice.id} notice={notice} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events">
                <div className="grid grid-cols-1 gap-6">
                  {notices
                    .filter(notice => notice.category === 'events')
                    .map((notice) => (
                      <NoticeCard key={notice.id} notice={notice} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="health">
                <div className="grid grid-cols-1 gap-6">
                  {notices
                    .filter(notice => notice.category === 'health')
                    .map((notice) => (
                      <NoticeCard key={notice.id} notice={notice} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface NoticeCardProps {
  notice: {
    id: number;
    title: string;
    date: string;
    category: string;
    content: string;
    isImportant: boolean;
  };
}

const NoticeCard = ({ notice }: NoticeCardProps) => {
  // Category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <BookOpen className="h-5 w-5" />;
      case 'administrative':
        return <Info className="h-5 w-5" />;
      case 'events':
        return <Users className="h-5 w-5" />;
      case 'health':
        return <AlertTriangle className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };
  
  // Category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'administrative':
        return 'bg-purple-100 text-purple-800';
      case 'events':
        return 'bg-green-100 text-green-800';
      case 'health':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className={notice.isImportant ? 'border-l-4 border-l-red-500' : ''}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl flex items-center">
              {notice.isImportant && <Bell className="h-5 w-5 text-red-500 mr-2" />}
              {notice.title}
            </CardTitle>
            <CardDescription className="flex items-center mt-2">
              <Calendar className="h-4 w-4 mr-1" />
              {notice.date}
            </CardDescription>
          </div>
          <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
            {getCategoryIcon(notice.category)}
            <span className="ml-1 capitalize">{notice.category}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{notice.content}</p>
      </CardContent>
    </Card>
  );
};

const BookOpen = Info; // Placeholder until we import the proper icon

export default NoticeBoard;
