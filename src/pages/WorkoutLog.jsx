import axios from "axios";
import { useEffect, useState } from "react";
import Btn from "../Components/Btn";
import TemplateCard from "../Components/TemplateCard";
import WorkoutModal from "../Components/WorkoutModal";
import { Link, useNavigate } from "react-router-dom";
import Back from "../assets/Icons/back.png";

export default function WorkoutLog() {
  const [openLegs, setOpenLegs] = useState(false);
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [template, setTemplate] = useState();
  const [userWorkout, setUserWorkout] = useState();

  const nav = useNavigate();
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

  // handle close
  const handleClose = () => {
    setOpenLegs(false);
    setOpenChest(false);
    setOpenBack(false);
  };
  //Get Workout Templates
  const getData = () => {
    axios.get(`${api}/workout/template`).then((response) => {
      setTemplate(response.data);
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
        console.log(response.data)
      });
  };

  const handleStartClick = (e) => {
    e.preventDefault();
    nav(`/workout/${e.target.value}`)

  }

  const handleHistoryClick = (e) => {
    e.preventDefault();
    nav('/workout/history')
  }

  const handleEditClick = (e) => {
    e.preventDefault();
    nav(`/workout/edit/${e.target.value}`)
  }

  useEffect(() => {
    getUserWorkout();
  }, []);

  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 min-h-screen">
      <div className="min-h-screen p-2 rounded-xl">
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="font-bold text-3xl">Start Workout</h1>
          <Link to="/post">
            <img src={Back} className="w-10" alt="back" />
          </Link>
        </div>
        <div className="my-6">
          <h3 className="italic font-bold text-2xl underline">Quick Start</h3>
        </div>
        <div className="mb-6 flex justify-between">
          <Btn btnText="Start New Workout" class="w-100" />
          <Btn btnText="View History" click={handleHistoryClick}/>
        </div>
        <div>
          <div className="flex justify-between border-b-2 pb-4">
            <h3 className="font-bold text-lg">Templates</h3>
            <Link to="/add-workout">
              <p className="font-bold">+ Template</p>
            </Link>
          </div>
          <div className="flex justify-evenly overflow-auto">
            {userWorkout?.map((work) => {
              return (
                <div className="flex border-2 mx-2 min-w-1/4 h-1/2 mb-8 mt-4 rounded-xl bg-stone-50">
                  <div className="flex flex-col pb-10 px-10 justify-between">
                    <p className="font-bold pt-4 text-2xl italic text-center">{work.workout_name}</p>
                    <div className="flex pt-10">
                      <Btn btnText='Edit' class='mr-4' click={handleEditClick} value={work.id}/>
                      <Btn btnText='Start' class='ml-4' click={handleStartClick} value={work.id}/>
                    </div>
                  </div>
                </div>
              );
            })}
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
      </div>
    </div>
  );
}
