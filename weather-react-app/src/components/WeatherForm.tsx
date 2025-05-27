import React, { useState } from "react";
import styles from "./style/weatherform.module.css"; // 👈 Import the CSS module
import { DEFAULT_CITY } from "../../CONSTANT";

interface WeatherFormType {
  onSearch: (inputSearch: string) => void;
}

function WeatherForm({ onSearch }: WeatherFormType) {
  const [inputCity, setInputCity] = useState<string>(DEFAULT_CITY);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      onSearch(inputCity.trim());
      setInputCity("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input
        type="text"
        value={inputCity}
        placeholder="Enter city name"
        onChange={(e) => setInputCity(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export default WeatherForm;
