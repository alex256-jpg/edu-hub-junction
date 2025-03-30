
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, TrendingUp, BarChart, User } from 'lucide-react';

const Academics = () => {
  const [selectedChild, setSelectedChild] = useState("child1");
  
  // Mock data for children
  const children = {
    child1: {
      name: "Mary Doe",
      class: "Senior 2",
      subjects: [
        {
          id: 1,
          name: "Mathematics",
          teacher: "Mrs. Sarah Williams",
          currentGrade: "A",
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
          assessments: [
            { id: 1, type: "Formative Assessment", date: "2023-09-14", score: "43/50", grade: "A-" },
            { id: 2, type: "Mid-Term Exam", date: "2023-10-19", score: "82/100", grade: "A-" },
            { id: 3, type: "Project Work", date: "2023-11-09", score: "46/50", grade: "A" },
          ]
        },
      ]
    },
    child2: {
      name: "James Doe",
      class: "Senior 1",
      subjects: [
        {
          id: 1,
          name: "Mathematics",
          teacher: "Mr. Robert Kato",
          currentGrade: "A-",
          assessments: [
            { id: 1, type: "Formative Assessment", date: "2023-09-16", score: "40/50", grade: "B+" },
            { id: 2, type: "Mid-Term Exam", date: "2023-10-21", score: "85/100", grade: "A-" },
            { id: 3, type: "Project Work", date: "2023-11-11", score: "44/50", grade: "A-" },
          ]
        },
        {
          id: 2,
          name: "English Language",
          teacher: "Mrs. Joan Namutebi",
          currentGrade: "A",
          assessments: [
            { id: 1, type: "Formative Assessment", date: "2023-09-13", score: "45/50", grade: "A" },
            { id: 2, type: "Mid-Term Exam", date: "2023-10-19", score: "88/100", grade: "A" },
            { id: 3, type: "Project Work", date: "2023-11-09", score: "47/50", grade: "A+" },
          ]
        },
        {
          id: 3,
          name: "Science",
          teacher: "Mr. Daniel Ssozi",
          currentGrade: "B+",
          assessments: [
            { id: 1, type: "Formative Assessment", date: "2023-09-15", score: "38/50", grade: "B" },
            { id: 2, type: "Mid-Term Exam", date: "2023-10-20", score: "80/100", grade: "B+" },
            { id: 3, type: "Project Work", date: "2023-11-10", score: "42/50", grade: "B+" },
          ]
        },
      ]
    }
  };
  
  const selectedChildData = children[selectedChild];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Academic Progress</h2>
          <p className="text-muted-foreground">
            Track your child's academic performance
          </p>
        </div>
        <div className="w-[200px]">
          <Select value={selectedChild} onValueChange={setSelectedChild}>
            <SelectTrigger>
              <SelectValue placeholder="Select child" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="child1">Mary Doe</SelectItem>
              <SelectItem value="child2">James Doe</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-500" />
              <CardTitle>{selectedChildData.name} - {selectedChildData.class}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="font-medium">Overall Performance: Good</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">A-</div>
                <p className="text-xs text-muted-foreground">Current term</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Class Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3rd</div>
                <p className="text-xs text-muted-foreground">Out of 40 students</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">Current term</p>
              </CardContent>
            </Card>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Subject Performance
          </h3>
          
          <div className="space-y-6">
            {selectedChildData.subjects.map((subject) => (
              <Card key={subject.id} className="overflow-hidden border-l-4" style={{
                borderLeftColor: subject.currentGrade.startsWith('A') ? '#22c55e' : 
                                 subject.currentGrade.startsWith('B') ? '#3b82f6' : 
                                 subject.currentGrade.startsWith('C') ? '#f59e0b' : '#ef4444'
              }}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <Badge className="text-md bg-blue-100 text-blue-800 hover:bg-blue-200">
                      <Award className="mr-1 h-4 w-4" />
                      Grade: {subject.currentGrade}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Teacher: {subject.teacher}</p>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Academics;
