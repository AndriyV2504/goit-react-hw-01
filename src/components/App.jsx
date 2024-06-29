import Profile from "./Profile/Profile";
import userData from "../userData.json";

const App = () => {
  return (
    <main>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        atats={userData.stats}
      />
    </main>
  );
};

export default App;
