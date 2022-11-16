import Btn from "./Btn";

export default function GroupCard() {
  return (
    <div className="flex flex-col p-6 bg-slate-100 m-6">
      <h1 className="font-bold text-xl pb-2">Vancouver Climbers</h1>
      <div className="flex mb-4">
        <img
          className="w-20 h-20 mr-4"
          src="https://static01.nyt.com/images/2022/05/03/well/22well-bouldering1/22well-bouldering1-mediumSquareAt3X.jpg"
          alt=""
        />
        <p className="italic">
          Hey we're a group in Vancouver that is dedicated to all things
          climbing! You can find anything from tips, selling memberships to
          local gym or carpool to the awesome climbing routes we have in
          Vancouver!
        </p>
      </div>
      <Btn btnText="Join" />
    </div>
  );
}
