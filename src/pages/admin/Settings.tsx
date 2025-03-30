import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
        <p className="text-muted-foreground">
          Manage your school system settings and configurations.
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="sms">SMS Settings</TabsTrigger>
          <TabsTrigger value="roles">User Roles</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure general settings for your school management system.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="school-name">School Name</Label>
                  <Input id="school-name" defaultValue="EduHub Junction Secondary School" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="school-address">School Address</Label>
                  <Input id="school-address" defaultValue="123 Education Lane, Kampala, Uganda" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="school-email">School Email</Label>
                  <Input id="school-email" type="email" defaultValue="info@eduhub-junction.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="school-phone">School Phone</Label>
                  <Input id="school-phone" defaultValue="+256-XXX-XXX-XXX" />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="academic-year">Current Academic Year</Label>
                  <Input id="academic-year" defaultValue="2023" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="current-term">Current Term</Label>
                  <Input id="current-term" defaultValue="Term 3" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <div className="text-sm text-muted-foreground">
                      When enabled, only administrators can access the system.
                    </div>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="subscription">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Settings</CardTitle>
              <CardDescription>
                Manage your subscription plan and payment information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border rounded-md bg-green-50 border-green-200">
                <div className="font-semibold text-green-700">Active Subscription</div>
                <div className="text-green-600">Term Plan - Expires on November 30, 2023</div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Plan</Label>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <div className="font-medium">Term Subscription</div>
                      <div className="text-sm text-muted-foreground">UGX 300,000 per term</div>
                    </div>
                    <Button variant="outline">Change Plan</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Available Plans</Label>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 border rounded-md">
                      <div>
                        <div className="font-medium">Yearly Subscription</div>
                        <div className="text-sm text-muted-foreground">UGX 800,000 per year (Save UGX 100,000)</div>
                      </div>
                      <Button>Upgrade</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Payment History</Label>
                  <div className="border rounded-md">
                    <div className="py-2 px-4 border-b">
                      <div className="flex justify-between">
                        <span>Term Subscription - Term 3</span>
                        <span>UGX 300,000</span>
                      </div>
                      <div className="text-xs text-muted-foreground">September 1, 2023</div>
                    </div>
                    <div className="py-2 px-4 border-b">
                      <div className="flex justify-between">
                        <span>Term Subscription - Term 2</span>
                        <span>UGX 300,000</span>
                      </div>
                      <div className="text-xs text-muted-foreground">May 1, 2023</div>
                    </div>
                    <div className="py-2 px-4">
                      <div className="flex justify-between">
                        <span>Term Subscription - Term 1</span>
                        <span>UGX 300,000</span>
                      </div>
                      <div className="text-xs text-muted-foreground">January 1, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sms">
          <Card>
            <CardHeader>
              <CardTitle>SMS Settings</CardTitle>
              <CardDescription>
                Configure your Mambo SMS integration for sending notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-key">Mambo SMS API Key</Label>
                  <Input id="api-key" type="password" defaultValue="••••••••••••••••" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sender-id">Sender ID</Label>
                  <Input id="sender-id" defaultValue="EDUHUB" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sms-cost">SMS Cost (UGX)</Label>
                  <Input id="sms-cost" type="number" defaultValue="30" />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>SMS Notifications</Label>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="attendance-sms">Attendance Notifications</Label>
                        <div className="text-sm text-muted-foreground">
                          Send SMS to parents when a student is absent.
                        </div>
                      </div>
                      <Switch id="attendance-sms" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="fee-reminder">Fee Reminders</Label>
                        <div className="text-sm text-muted-foreground">
                          Send SMS reminders for fee payment.
                        </div>
                      </div>
                      <Switch id="fee-reminder" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="exam-results">Exam Results</Label>
                        <div className="text-sm text-muted-foreground">
                          Send SMS when exam results are released.
                        </div>
                      </div>
                      <Switch id="exam-results" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md bg-blue-50 border-blue-200">
                  <div className="font-semibold">SMS Balance</div>
                  <div className="text-xl font-bold">2,500 SMS Credits</div>
                  <Button size="sm" className="mt-2">Top Up Credits</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save SMS Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle>User Role Management</CardTitle>
              <CardDescription>
                Assign and manage user roles and permissions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <div className="font-medium">Administrator</div>
                    <div className="text-sm text-muted-foreground">Full access to all system features</div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <div className="font-medium">Teacher</div>
                    <div className="text-sm text-muted-foreground">Access to classes, marks entry, and student data</div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <div className="font-medium">Accountant</div>
                    <div className="text-sm text-muted-foreground">Access to fee management and financial records</div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <div className="font-medium">Student</div>
                    <div className="text-sm text-muted-foreground">Access to personal academic records and assignments</div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <div className="font-medium">Parent</div>
                    <div className="text-sm text-muted-foreground">Access to children's records and fee information</div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
              
              <Button variant="outline">
                <Plus size={16} className="mr-2" /> Create Custom Role
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
