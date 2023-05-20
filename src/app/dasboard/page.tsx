import React from "react";
import { supabase } from "../supabaseClient";

const Dashboard = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return <div>Dashboard</div>;
};

export default Dashboard;
