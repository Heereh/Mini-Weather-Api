const APIKey = 'fc056983ebb174adff3fce0f82251ee9';

const requestCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIKey}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
