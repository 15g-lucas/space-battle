let score = document.querySelector('.score')
let time = document.querySelector('.time')
let spaceContainer = document.querySelector('.my-space-ctn')
let asteroidsContainer = document.querySelector('.asteroids-ctn')
let enemySpaceContainer = document.querySelector('.enemy-space-ctn')
let friendlySpaceContainer = document.querySelector('.friendly-space-ctn')
let gameZone = document.querySelector('.game-zone')
let shootSong = document.querySelector('#shoot_song')
let repeatSong = document.querySelector('#repeat_song')
let destroySong = document.querySelector('#destroy_song')
let fuel = document.querySelector('.fuel')
let currentTime = 0
let fuelCount = 30
let scoreCount = 0
let isPause = true
let isMuted = false

const SPEED_TIR = 5
const SPEED_ASTEROID = 1
const SPEED_SPACE = 1


// Activate munition
document.addEventListener('keyup', (evt) => {
    if (!isPause) {
        if (evt.keyCode === 32) tir()
    }
})
document.querySelector('.start_game').addEventListener('click', (evt) => {
    resetGame()
})
document.querySelector('.restart_game').addEventListener('click', (evt) => {
    // resetGame()
    window.location.reload()
})


const resetGame = () => {
    isPause = false
    fuelCount = 15
    scoreCount = 0
    currentTime = 0
    document.querySelector('.score').innerText = scoreCount
    document.querySelector('.game_over').style.display = 'none'
}


document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 80) {
        isPause = !isPause
    }
})
document.querySelector('.mute_btn').addEventListener('click', (evt) => {
    isMuted = !isMuted
})
document.querySelector('.pause_btn').addEventListener('click', (evt) => {
    isPause = !isPause
})
document.querySelector('.stop_pause_btn').addEventListener('click', (evt) => {
    isPause = false
})


const areas = document.querySelectorAll('.sensitives_areas');
const spatial = document.querySelector('.my-space-ctn');

let intervalId;

areas.forEach(area => {
    area.addEventListener('mouseover', (evt) => {
        if (evt.target.id === 'TL') {
            intervalId = setInterval(() => {
                const mySpaceCtn = document.querySelector('.my-space-ctn')
                const currentLeft = parseInt(mySpaceCtn.style.left) || 0
                let currLeft = currentLeft - SPEED_SPACE
                if (currLeft < 0) currLeft = 0
                if (currLeft > 750) currLeft = 750
                mySpaceCtn.style.left = currLeft + 'px'

                const currentTop = parseInt(mySpaceCtn.style.top) || 0


                let currTop = currentTop - SPEED_SPACE
                if (currTop < 0) currTop = 0
                if (currTop > 400) currTop = 400
                mySpaceCtn.style.top = currTop + 'px'
            }, 10);
        } else if (evt.target.id === 'TR') {
            intervalId = setInterval(() => {
                const mySpaceCtn = document.querySelector('.my-space-ctn')
                const currentLeft = parseInt(mySpaceCtn.style.left) || 0
                let currLeft = currentLeft + SPEED_SPACE
                if (currLeft < 0) currLeft = 0
                if (currLeft > 750) currLeft = 750

                mySpaceCtn.style.left = currLeft + 'px'

                const currentTop = parseInt(mySpaceCtn.style.top) || 0
                let currTop = currentTop - SPEED_SPACE
                if (currTop < 0) currTop = 0
                if (currTop > 400) currTop = 400
                mySpaceCtn.style.top = currTop + 'px'
            }, 10);
        } else if (evt.target.id === 'BR') {
            intervalId = setInterval(() => {
                const mySpaceCtn = document.querySelector('.my-space-ctn')
                const currentLeft = parseInt(mySpaceCtn.style.left) || 0
                let currLeft = currentLeft - SPEED_SPACE
                if (currLeft < 0) currLeft = 0
                if (currLeft > 750) currLeft = 750

                mySpaceCtn.style.left = currLeft + 'px'

                const currentTop = parseInt(mySpaceCtn.style.top) || 0
                let currTop = currentTop + SPEED_SPACE
                if (currTop < 0) currTop = 0
                if (currTop > 400) currTop = 400
                mySpaceCtn.style.top = currTop + 'px'
            }, 10);
        } else if (evt.target.id === 'BL') {
            intervalId = setInterval(() => {
                const mySpaceCtn = document.querySelector('.my-space-ctn')
                const currentLeft = parseInt(mySpaceCtn.style.left) || 0
                let currLeft = currentLeft + SPEED_SPACE
                if (currLeft < 0) currLeft = 0
                if (currLeft > 750) currLeft = 750

                mySpaceCtn.style.left = currLeft + 'px'

                const currentTop = parseInt(mySpaceCtn.style.top) || 0
                let currTop = currentTop + SPEED_SPACE
                if (currTop < 0) currTop = 0
                if (currTop > 400) currTop = 400
                mySpaceCtn.style.top = currTop + 'px'
            }, 10);
        }
    });

    area.addEventListener('mouseout', (evt) => {
        clearInterval(intervalId);
    });
});


// Activate Asteriods
const addAsteroid = () => {
    const asteroid = document.createElement('div')
    asteroid.className = 'asteroid'
    asteroid.style.bottom = Math.floor(Math.random() * 500) + 'px'
    asteroid.dataset.vie = 2
    asteroidsContainer.appendChild(asteroid)
}


const addFriendlySpace = () => {
    const friendlySpace = document.createElement('div')
    friendlySpace.className = 'friendly_space'
    friendlySpace.style.bottom = Math.floor(Math.random() * 500) + 'px'
    friendlySpaceContainer.appendChild(friendlySpace)
}

const addFuel = () => {
    const fuel = document.createElement('div')
    fuel.className = 'fuel-img'
    fuel.style.right = Math.floor(Math.random() * 500) + 'px'
    document.querySelector('.fuel-ctn').appendChild(fuel)
}

const tir = () => {
    const tir = document.createElement('div')
    tir.className = 'munition'
    tir.style.top = spaceContainer.style.top
    tir.style.left = spaceContainer.style.left
    tir.style.marginTop = 80 + 'px'
    gameZone.appendChild(tir)
    shootSong.play()
}

const enemyTir = (el) => {
    const tir = document.createElement('div')
    tir.className = 'enemy_munition'
    tir.style.bottom = el.style.bottom
    tir.style.left = el.style.left
    tir.style.marginTop = 80 + 'px'
    enemySpaceContainer.appendChild(tir)
    shootSong.play()
}


const addEnemySpace = () => {
    const enemySpace = document.createElement('div')
    enemySpace.className = 'enemy_space'
    enemySpace.style.bottom = Math.floor(Math.random() * 500) + 'px'
    enemySpaceContainer.appendChild(enemySpace)
    enemyTir(enemySpace)

}

const updateGame = () => {
    if (!isMuted) {
        destroySong.muted = false
        shootSong.muted = false
        repeatSong.muted = false
    } else {
        destroySong.muted = true
        shootSong.muted = true
        repeatSong.muted = true
    }

    if (fuelCount > 30) fuelCount = 30

    if (isPause) {
        document.querySelector('.planet_1').classList.add('paused')
        document.querySelector('.planet_2').classList.add('paused')
        document.querySelector('.planet_3').classList.add('paused')
        document.querySelector('.planet_4').classList.add('paused')
        document.querySelector('.planet_5').classList.add('paused')
        document.querySelector('.my-space-ctn').classList.add('paused')
        document.querySelector('.pause').style.display = 'flex'
        repeatSong.pause()
        return;
    } else {
        document.querySelector('.planet_1').classList.remove('paused')
        document.querySelector('.planet_2').classList.remove('paused')
        document.querySelector('.planet_3').classList.remove('paused')
        document.querySelector('.planet_4').classList.remove('paused')
        document.querySelector('.planet_5').classList.remove('paused')
        document.querySelector('.my-space-ctn').classList.remove('paused')

        document.querySelector('.pause').style.display = 'none'
        document.querySelector('.welcome').style.display = 'none'
    }
    if (fuelCount <= 0) {
        isPause = true
        document.querySelector('.game_over').style.display = 'flex'
        repeatSong.pause()
        return
    }

    repeatSong.play()

    const munitions = document.querySelectorAll('.munition')
    munitions.forEach((munition) => {
        munition.style.left = `${munition.offsetLeft + SPEED_TIR}px`
        if (munition.offsetLeft > 900) {
            munition.remove()
        }
    })

    const enemy_munitions = document.querySelectorAll('.enemy_munition')
    enemy_munitions.forEach((enemy_munition) => {
        enemy_munition.style.left = `${enemy_munition.offsetLeft - SPEED_TIR}px`
        if (enemy_munition.offsetLeft > 0) {
            enemy_munition.remove()
        }
    })

    const asteroids = document.querySelectorAll('.asteroid')
    asteroids.forEach((asteroid) => {
        asteroid.style.left = `${asteroid.offsetLeft - SPEED_ASTEROID}px`

        if (asteroid.offsetLeft < -1100) {
            asteroid.remove()
        }
    })

    const enemies = document.querySelectorAll('.enemy_space')
    enemies.forEach((enemy) => {
        enemy.style.left = `${enemy.offsetLeft - SPEED_ASTEROID}px`

        if (enemy.offsetLeft < -1100) {
            enemy.remove()
        }
    })

    const friendlies = document.querySelectorAll('.friendly_space')
    friendlies.forEach((enemy) => {
        enemy.style.left = `${enemy.offsetLeft - SPEED_ASTEROID}px`

        if (enemy.offsetLeft < -1100) {
            enemy.remove()
        }
    })

    const fuels = document.querySelectorAll('.fuel-img')
    fuels.forEach((fuel) => {
        fuel.style.top = `${fuel.offsetTop + SPEED_ASTEROID}px`
        if (fuel.offsetTop > 600) {
            fuel.remove()
        }
    })


    munitions.forEach((munition) => {
        const rect = munition.getBoundingClientRect();
        const elementsAtPoint = document.elementsFromPoint(
            rect.right,
            rect.bottom
        );

        elementsAtPoint.forEach((element) => {
            if (element.classList.contains('asteroid')) {
                element.dataset.vie--
                munition.remove()
                if (element.dataset.vie == 0) {
                    scoreCount += 10
                    score.innerText = scoreCount
                    element.remove()
                    destroySong.play()
                }
            } else if (element.classList.contains('enemy_space')) {
                munition.remove()
                scoreCount += 5
                score.innerText = scoreCount
                element.remove()
                destroySong.play()
            } else if (element.classList.contains('friendly_space')) {
                munition.remove()
                scoreCount -= 10
                score.innerText = scoreCount
                element.remove()
                element.remove()
                destroySong.play()
            }
        });
    });

    enemy_munitions.forEach((munition) => {
        const rect = munition.getBoundingClientRect();
        const elementsAtPoint = document.elementsFromPoint(
            rect.right,
            rect.bottom
        );

        elementsAtPoint.forEach((element) => {
            if (element.classList.contains('my-space-ctn')) {
                scoreCount -= 15
                document.querySelector('.score').innerText = scoreCount
                munition.remove()
            }
        });
    });


    const element = document.querySelector('.my-space-ctn');
    const rect = element.getBoundingClientRect();

    const pointsToCheck = [
        {x: rect.left, y: rect.top},           // Coin supérieur gauche
        {x: rect.right, y: rect.top},          // Coin supérieur droit
        {x: rect.left, y: rect.bottom},        // Coin inférieur gauche
        {x: rect.right, y: rect.bottom},       // Coin inférieur droit
        {x: (rect.left + rect.right) / 2, y: (rect.top + rect.bottom) / 2} // Centre
    ];

    const elementsInCollision = new Set();

    pointsToCheck.forEach(point => {
        const elementsAtPoint = document.elementsFromPoint(point.x, point.y);
        elementsAtPoint.forEach(el => elementsInCollision.add(el));
    });

    elementsInCollision.forEach((element) => {
        if (element.classList.contains('asteroid') ||
            element.classList.contains('enemy_space') ||
            element.classList.contains('friendly_space')) {
            element.remove();
            destroySong.play();
            fuelCount -= 15;
            updateFuelDisplay(fuelCount, 'fuelpopm');
        } else if (element.classList.contains('fuel-img')) {
            element.remove();
            fuelCount += 15;
            updateFuelDisplay(fuelCount, 'fuelpopp');
        }
    });


}

const updateFuelDisplay = (fuelCount, animationClass) => {
    const fuelElement = document.querySelector('.fuel');
    fuelElement.innerText = Math.min(fuelCount, 30);
    fuelElement.style.height = (Math.min(fuelCount, 30) / 30) * 100 + '%';
    fuelElement.classList.add(animationClass);
    setTimeout(() => {
        fuelElement.classList.remove(animationClass);
    }, 500);
}
setInterval(() => {
    updateGame()
}, 10)

setInterval(() => {
    if (!isPause) {
        addAsteroid()
    }
}, 10000)
addAsteroid()
setInterval(() => {
    if (!isPause) {
        addEnemySpace()
    }
}, 15000)
addEnemySpace()
setInterval(() => {
    if (!isPause) {
        addFriendlySpace()
    }
}, 6000)


setInterval(() => {
    if (!isPause) {
        addFuel()
    }
}, 3500)
addFuel()

// Update time
setInterval(() => {
    if (!isPause) {
        currentTime++
        fuelCount--
        time.innerText = currentTime.toString().padStart(2, 0)
        console.log(currentTime)
        fuel.innerText = fuelCount.toString().padStart(2, 0)
        document.querySelector('.fuel').style.height = fuelCount / 30 * 100 + '%'
    }

}, 1000)