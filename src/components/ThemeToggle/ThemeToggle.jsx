
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(AuthContext);

  const toggleAppTheme = () => {
    const appContainer = document.getElementById("root"); // Replace with the actual ID of your app's root container
    if (appContainer) {
      appContainer.classList.toggle("dark-mode", isDarkMode);
    }
    toggleTheme();
  };

  return (
    <>
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="mr-2 text-slate-600">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
        <input
          type="checkbox"
          className={`toggle ${isDarkMode ? "toggle-checked" : ""}`}
          onClick={toggleAppTheme}
        />
      </label>
    </div>
    </>
    
  );
};

export default ThemeToggle;
    
    
    
    
    