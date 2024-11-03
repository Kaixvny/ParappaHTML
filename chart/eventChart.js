const sectionEvents = {
    //Events are read like this... [ section: function() { what you want to happen in that section }]
    40: function() { 
        endBeat = 16; 
    },
    22: function() { 
        leftSound = "jump1"; 
    },
    26: function() { 
        rightSound = "pose2"; 
    },
    32: function() { 
        leftSound = "duck1"; 
        rightSound = "turn1"; 
    },
    41: function() { 
        kickSound = 2; 
        punchSound = 3; 
    },
    43: function() { 
        blockSound = 2; 
        leftSound = "duck2"; 
        rightSound = "turn2"; 
    },
    49: function() {
        if (currentIndex === 5) { 
            leftSound = "jump2"; 
            updateNoteSounds(); 
        }
    },
    51: function() { 
        if (currentIndex === 5) { 
            rightSound = "pose1"; 
            updateNoteSounds(); 
        }
    },
    52: function() { //weird
        leftSound = "duck2"; 
        rightSound = "turn2"; 
    },
    54: function() { //also weird
        leftSound = "jump2"; 
        rightSound = "pose1"; 
    },
    62: function() { 
        kickSound = 3; 
        punchSound = 2; 
        blockSound = 3; 
        chopSound = 2; 
    },
    65: function() { //also weird??
        kickSound = 2; 
        rightSound = "turn1"; 
    },
    68: function() { 
        leftSound = "duck2"; 
    },
    72: function() { 
        leftSound = "jump2"; 
        kickSound = 3; 
        chopSound = 3; 
        punchSound = 2; 
    },
    81: function() { 
        window.location.href = "https://parappa.kaixvny.com/"
    }
};