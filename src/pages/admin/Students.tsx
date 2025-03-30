
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, MoreHorizontal } from 'lucide-react';

const Students = () => {
  // Sample student data
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', class: 'Senior 3', gender: 'Male', admissionNo: 'S21001', contact: '+256-7XX-XXX-XXX' },
    { id: 2, name: 'Mary Smith', class: 'Senior 2', gender: 'Female', admissionNo: 'S21002', contact: '+256-7XX-XXX-XXX' },
    { id: 3, name: 'Robert Johnson', class: 'Senior 4', gender: 'Male', admissionNo: 'S21003', contact: '+256-7XX-XXX-XXX' },
    { id: 4, name: 'Sarah Williams', class: 'Senior 1', gender: 'Female', admissionNo: 'S21004', contact: '+256-7XX-XXX-XXX' },
    { id: 5, name: 'Michael Brown', class: 'Senior 5', gender: 'Male', admissionNo: 'S21005', contact: '+256-7XX-XXX-XXX' },
    { id: 6, name: 'Jessica Davis', class: 'Senior 3', gender: 'Female', admissionNo: 'S21006', contact: '+256-7XX-XXX-XXX' },
    { id: 7, name: 'David Miller', class: 'Senior 6', gender: 'Male', admissionNo: 'S21007', contact: '+256-7XX-XXX-XXX' },
    { id: 8, name: 'Emily Wilson', class: 'Senior 2', gender: 'Female', admissionNo: 'S21008', contact: '+256-7XX-XXX-XXX' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Student Management</h2>
        <Button className="bg-school-primary">
          <Plus size={16} className="mr-2" /> Add New Student
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search students..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Admission No.</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.admissionNo}</TableCell>
                  <TableCell>{student.contact}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No students found matching your search criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Students;
