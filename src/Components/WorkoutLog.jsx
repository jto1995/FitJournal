import axios from "axios";
import { useEffect, useState } from "react";
import Btn from "./Btn";
import TemplateCard from "./TemplateCard";
import WorkoutModal from "./WorkoutModal";
import { Link } from "react-router-dom";

export default function WorkoutLog({}) {
  const [openLegs, setOpenLegs] = useState(false);
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [template, setTemplate] = useState();
  const [userWorkout, setUserWorkout] = useState();
  const [userModal, setUserModal] = useState(false)

  const api = "http://localhost:8080";

  // handle open
  const handleLegsOpen = () => {
    setOpenLegs(true);
  };

  const handleChestOpen = () => {
    setOpenChest(true);
  };

  const handleBackOpen = () => {
    setOpenBack(true);
  };

  const handleUserModal = () => {
    setUserModal(true)
  }
  // handle close
  const handleClose = () => {
    setOpenLegs(false);
    setOpenChest(false);
    setOpenBack(false);
    setUserModal(false);

  };
  //Get Workout Templates
  const getData = () => {
    axios.get(`${api}/workout/template`).then((response) => {
      setTemplate(response.data);
      console.log(response.data)
    });
  };

  // Load Workout Templates
  useEffect(() => {
    getData();
  }, []);

  // Filter Workout Templates
  const filteredLegWorkout = template?.filter((temp) => {
    return temp.workout_name === "Legs";
  });

  const filteredChestWorkout = template?.filter((temp) => {
    return temp.workout_name === "Chest";
  });

  const filteredBackWorkout = template?.filter((temp) => {
    return temp.workout_name === "Back";
  });

  // get User Workout Templates
  const getUserWorkout = () => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    axios
      .get(`${api}/workout`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setUserWorkout(response.data);
      });
  };

  useEffect(() => {
    getUserWorkout();
  }, []);

  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 min-h-screen">
      <Link to='/post'>⬅️</Link>
    <div className="min-h-screen p-4 rounded-xl">
      <h1 className="font-bold text-2xl mb-6">Start Workout</h1>
      <div className="mb-2">
        <h3 className="italic font-bold text-xl">Quick Start</h3>
      </div>
      <div className="mb-6">
        <Btn btnText="Start New Workout" class="w-100" />
      </div>
      <div>
        <div className="flex justify-between border-b-2 pb-4">
          <h3 className="mt-3 font-bold text-lg">Templates</h3>
          <Link to='/add-workout'><p>+ Template</p></Link>
        </div>
        <div className="flex justify-evenly overflow-auto">
          <div className="flex justify-center border-2 w-2/5 h-1/2 ml-20 mb-8 mt-4 mr-2 rounded-xl bg-stone-50">
            <p className="p-10"> + Tap to add New Template</p>
          </div>
          {userWorkout?.map((work) => {
            return(
          <div onClick={handleUserModal} className="flex justify-center border-2 mx-2 w-2/5 h-1/2 mb-8 mt-4 rounded-xl bg-stone-50">
            <p className="p-16 font-bold italic">{work.workout_name}</p>
          </div>
          )})}
        </div>
      </div>
      <div>
        <div className="mb-4 border-t-2 pt-4">
          <h3 className="font-bold text-2xl">Example Templates</h3>
        </div>
        <div className="flex flex-col mb-10">
          <TemplateCard
            click={handleLegsOpen}
            title="Legs"
            filteredWorkout={filteredLegWorkout}
          />
          <TemplateCard
            click={handleChestOpen}
            title="Chest & Triceps"
            filteredWorkout={filteredChestWorkout}
          />
          <TemplateCard
            click={handleBackOpen}
            title="Back & Biceps"
            filteredWorkout={filteredBackWorkout}
          />
        </div>
      </div>
      {openLegs && (
        <WorkoutModal
          close={handleClose}
          title="Legs"
          filteredWorkout={filteredLegWorkout}
        />
      )}
      {openBack && (
        <WorkoutModal
          close={handleClose}
          title="Back"
          filteredWorkout={filteredBackWorkout}
        />
      )}
      {openChest && (
        <WorkoutModal
          close={handleClose}
          title="Chest"
          filteredWorkout={filteredChestWorkout}
        />
      )}
      {userModal && (
        <WorkoutModal
        close={handleClose}
        filteredWorkout={userWorkout}
        />
      )}
    </div>
    </div>
  );
}
