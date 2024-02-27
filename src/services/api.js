export const getRockets = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const rockets = response.json();

    return rockets;
}
