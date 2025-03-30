
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Clock } from 'lucide-react';

const Subjects = () => {
  // Mock data for student subjects, marks, and assignments
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      teacher: "Mrs. Sarah Williams",
      currentGrade: "A",
      assignments: [
        { id: 1, title: "Algebra Practice", dueDate: "2023-10-15", score: "85/100", status: "submitted" },
        { id: 2, title: "Geometry Test", dueDate: "2023-11-05", score: "90/100", status: "submitted" },
        { id: 3, title: "Quadratic Equations", dueDate: "2023-11-25", score: "", status: "pending" },
      ],
      assessments: [
        { id: 1, type: "Formative Assessment", date: "2023-09-15", score: "42/50", grade: "B+" },
        { id: 2, type: "Mid-Term Exam", date: "2023-10-20", score: "87/100", grade: "A" },
        { id: 3, type: "Project Work", date: "2023-11-10", score: "45/50", grade: "A" },
      ]
    },
    {
      id: 2,
      name: "English Language",
      teacher: "Mr. John Okello",
      currentGrade: "B+",
      assignments: [
        { id: 1, title: "Essay Writing", dueDate: "2023-10-10", score: "42/50", status: "submitted" },
        { id: 2, title: "Reading Comprehension", dueDate: "2023-11-01", score: "38/50", status: "submitted" },
        { id: 3, title: "Grammar Test", dueDate: "2023-11-20", score: "", status: "pending" },
      ],
      assessments: [
        { id: 1, type: "Formative Assessment", date: "2023-09-12", score: "40/50", grade: "B+" },
        { id: 2, type: "Mid-Term Exam", date: "2023-10-18", score: "78/100", grade: "B+" },
        { id: 3, type: "Project Work", date: "2023-11-08", score: "43/50", grade: "A-" },
      ]
    },
    {
      id: 3,
      name: "Science",
      teacher: "Dr. Peter Muwanga",
      currentGrade: "A-",
      assignments: [
        { id: 1, title: "Lab Report", dueDate: "2023-10-12", score: "45/50", status: "submitted" },
        { id: 2, title: "Physics Problems", dueDate: "2023-11-02", score: "42/50", status: "submitted" },
        { id: 3, title: "Chemistry Quiz", dueDate: "2023-11-22", score: "", status: "pending" },
      ],
      assessments: [
        { id: 1, type: "Formative Assessment", date: "2023-09-14", score: "43/50", grade: "A-" },
        { id: 2, type: "Mid-Term Exam", date: "2023-10-19", score: "82/100", grade: "A-" },
        { id: 3, type: "Project Work", date: "2023-11-09", score: "46/50", grade: "A" },
      ]
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Subjects</h2>
        <p className="text-muted-foreground">
          View your academic progress across all subjects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id}>
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-xl">{subject.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Teacher: {subject.teacher}</p>
                  </div>
                </div>
                <Badge className="text-md bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Award className="mr-1 h-4 w-4" />
                  Current Grade: {subject.currentGrade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="marks" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-6">
                  <TabsTrigger value="marks" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                    Assessments & Marks
                  </TabsTrigger>
                  <TabsTrigger value="assignments" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                    Assignments
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="marks" className="border-0 p-6">
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Assessment Type</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead>Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subject.assessments.map((assessment) => (
                          <TableRow key={assessment.id}>
                            <TableCell>{assessment.type}</TableCell>
                            <TableCell>{assessment.date}</TableCell>
                            <TableCell>{assessment.score}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={
                                assessment.grade.startsWith('A') ? "bg-green-50 text-green-700 border-green-200" :
                                assessment.grade.startsWith('B') ? "bg-blue-50 text-blue-700 border-blue-200" :
                                assessment.grade.startsWith('C') ? "bg-amber-50 text-amber-700 border-amber-200" :
                                "bg-red-50 text-red-700 border-red-200"
                              }>
                                {assessment.grade}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="assignments" className="border-0 p-6">
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subject.assignments.map((assignment) => (
                          <TableRow key={assignment.id}>
                            <TableCell>{assignment.title}</TableCell>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell>{assignment.score}</TableCell>
                            <TableCell>
                              {assignment.status === 'submitted' ? (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Submitted
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Pending
                                </Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
