const affirmations = [
    "Some people are lost in their fires, others are forged in them.",
    "If you want to shine like sun first you have to burn like it.",
    "Growth begins at the end of your comfort zone.",
    "Every storm you weather makes you stronger.",
    "You are not defined by your past; you are prepared by it.",
    "The harder the climb, the better the view from the top.",
    "Failure is not the opposite of success; it’s part of the process.",
    "You are capable of more than you know.",
    "Challenges are opportunities in disguise.",
    "Each day is a new chance to rewrite your story.",
    "Strength is built through perseverance, not ease.",
    "Be the energy you want to attract.",
    "You are the author of your own destiny.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "Courage doesn’t mean you don’t get afraid; it means you don’t let fear stop you.",
    "Become who you were born to be. – Elrond",
    "There is always hope. – Aragorn",
    "Even the smallest person can change the course of the future. – Galadriel",
    "There’s some good in this world, Mr. Frodo … and it’s worth fighting for. – Samwise Gamgee",
    "All we have to decide is what to do with the time that is given to us. – Gandalf",
    "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.",
    "Deeds will not be less valiant because they are unpraised. — Aragorn",
    "Try not to become a man of success, but rather try to become a man of value. — Albert Einstein",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
    "The best way to predict your future is to create it. — Peter Drucker",
    "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
    "Don't worry about calming the storm. Calm yourself, the storm will pass.",
    "The secret of your future is hidden in your daily routine.",
    "It's a beautiful day to be alive! The rest is up to you.",
    "Not all storms come to disrupt your life, some come to clear your path.",
    "Your future is created by what you do today.",
    "I am committed to creating consistent and fulfilling habits everyday - Phyian Karinge's status",
    "A year from now, you will be thankful you did this today!",
    "The moment you decide you're worthy the universe starts to agree."
];


const getRandomAffirmation = () => {
    const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.write(affirmation);
}