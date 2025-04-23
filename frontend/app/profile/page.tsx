// app/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save, User } from "lucide-react";
import { UserAPI } from "@/lib/api-client";
import { Passenger } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/provider/AuthProvider";
import { toast } from "sonner";

export default function ProfilePage() {
  const { user, isLoggedIn, loading } = useAuth();
  const router = useRouter();

  const [profileData, setProfileData] = useState<Partial<Passenger>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    passportNumber: "",
    dateOfBirth: "",
    nationality: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (loading) return;

    if (!isLoggedIn) {
      router.push("/login?redirect=/profile");
      return;
    }

    if (user?.passenger) {
      setProfileData({
        firstName: user.passenger.firstName || "",
        lastName: user.passenger.lastName || "",
        email: user.passenger.email || user.email || "",
        phone: user.passenger.phone || "",
        passportNumber: user.passenger.passportNumber || "",
        dateOfBirth: user.passenger.dateOfBirth 
          ? new Date(user.passenger.dateOfBirth).toISOString().split("T")[0]
          : "",
        nationality: user.passenger.nationality || "",
      });
    } else {
      // Set email from user if passenger data doesn't exist
      setProfileData({ ...profileData, email: user?.email || "" });
    }
  }, [isLoggedIn, loading, user, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await UserAPI.updateProfile(profileData);
    
      
      toast.success("Profile updated successfully");
      setIsUpdating(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        <span>Loading profile information...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </div>
                {!isUpdating && (
                  <Button variant="outline" onClick={() => setIsUpdating(true)}>
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                        disabled={!isUpdating}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                        disabled={!isUpdating}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={true} // Email is tied to account and cannot be changed here
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone || ""}
                      onChange={handleInputChange}
                      disabled={!isUpdating}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="passportNumber">Passport Number</Label>
                    <Input
                      id="passportNumber"
                      name="passportNumber"
                      value={profileData.passportNumber || ""}
                      onChange={handleInputChange}
                      disabled={!isUpdating}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={profileData.dateOfBirth || ""}
                        onChange={handleInputChange}
                        disabled={!isUpdating}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        value={profileData.nationality || ""}
                        onChange={handleInputChange}
                        disabled={!isUpdating}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              {isUpdating && (
                <CardFooter className="flex justify-between border-t pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsUpdating(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                  </Button>
                </CardFooter>
              )}
            </form>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-6">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="text-lg font-medium">
                  {user?.passenger?.firstName
                    ? `${user.passenger.firstName} ${user.passenger.lastName}`
                    : user?.email}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{user?.email}</p>
                <div className="mt-4 flex flex-col w-full space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Account Type:</span>
                    <span className="font-medium">{user?.role}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium">
                      {user?.isVerified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}