function getFullYear() {
    return new Date().getFullYear();
}

function getDayCount() {
    const start = new Date("2004-11-13");
    const today = new Date();

    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

export { getFullYear, getDayCount };