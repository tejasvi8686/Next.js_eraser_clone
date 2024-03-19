"use client"
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useQuery } from "convex/react";
import React, { useEffect } from "react";

const Dashboard = () => {
  const {user}:any=useKindeBrowserClient()
  const getUser=useQuery(api.user.getUser,{email:user?.email});
  useEffect(()=>{
    if(user)
    {
     console.log( getUser);
    }
},[user])

  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  );
};

export default Dashboard;
