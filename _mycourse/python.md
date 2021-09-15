---
layout: page
name: python
sidebar: other_sidebar
toc: true
permalink: python.html
collection: mycourse
category: "python"
excerpt_separator: <!--more-->
complex_map: true
map_name: usermap_mycourse
box_number: 1
order_number: 2
series: "MYCOURSE series"
weight: 2
link: https://www.36io.co
---

{% include custom/series_mycourse_next.html %}

## baseball
<script src="https://gist.github.com/aiegoo/87938fa7607c2b7de1ce7bb031be9069.js"></script>
[share](https://gist.github.com/aiegoo/87938fa7607c2b7de1ce7bb031be9069)

Above code has some errors and I have implemented class (OOP) and than called the functions inside the the class using a object.

```python
# Baseball Game
# By: Sergio Camalich
# Website: www.camali.ch

# Import modules
import sys
import random
import time



# Are we playing?
class PLAY:

    def __init__(self):
        # Playing?
        self.playing = 'y'

        # Agreements
        self.yes = ('y','yes')
        self.no = ('n', 'no')

        self.loses = 0
        self.ties = 0

        # Throws
        self.strikes = 0
        self.balls = 0
        self.fouls = True

        # Pitches
        self.pitches = 0

        # Hits
        self.hits = ('catch', 'single', 'double', 'triple', 'homerun')
        self.options = ('strike', 'ball', 'foul', 'hit', 'miss')

        # Runs
        self.position = 0
        self.runs = 0

        # Outs
        self.outs = 0

    def Play(self):

    # YES WE ARE
        while self.playing in self.yes:

            # Swing
            self.Swing()

            # Play Again?
            self.PlayAgain()

    def Swing(self):

        human = input('Press \'enter\' to swing or write \'q\' and enter to quit: ')

        if human == 'q':
            print ('\nThanks for playing!')
            sys.exit()


        while self.strikes < 3 or self.balls < 4:

            # Random choice
            batter = random.choice(self.options)
            pitcher = random.choice(self.options)

            if batter != pitcher:
                # That's a strike!
                if batter == self.options[0]:
                    self.Strike()
                # That's a ball!
                elif batter == self.options[1]:
                    self.Ball()
                # That's a foul!
                elif batter == self.options[2]:
                    self.Foul()
                # That's a hit!
                elif batter == self.options[3]:
                    self.Hit()
                # That's a miss!
                elif batter == self.options[4]:
                    self.Miss()
            # THAT'S A HOOOOOOOOOOOMMMMMMMMEEEEEE RUUUUUUNNNN!!!!!!!
            elif batter == pitcher:
                self.HomeRun()

            if self.strikes == 3:
                self.Out()
            elif self.balls == 4:
                print ('\nBASEBALL!\n')

            # Strikes/Balls Status
            self.Count()
            
            self.PlayAgain()

# What is Strike()?
    def Strike(self):

        print ('\nThats:')

        # global strikes

        while self.strikes <= 3:

            # This is a strike
            self.strikes += 1

            # Indeed it is...
            print ('STRIKE ', self.strikes, '!\n', sep='')

            # Strike 3!
            if self.strikes == 3:
                self.Out()

            self.Count()

            self.Swing()

    # What is Ball()?
    def Ball(self):

        print ('\nThats:')

        # global balls

        while self.balls <= 4:

            # This is a ball
            self.balls += 1

            # Indeed it is...
            print ('BALL ', self.balls, '!\n', sep='')

            # Ball 4!
            if self.balls == 4:
                self.Single()

            self.Count()

            self.Swing()

    # What is Foul()?
    def Foul(self):

        print ('\nFoul Ball!')

        # global strikes
        # global fouls

        if self.fouls == True:

            while self.strikes < 2:

                self.Strike()

                self.Swing()

            self.Count()

            self.Swing()

    # What is Hit()?
    def Hit(self):

        # global hits
        
        baseball = random.choice(self.hits)

        if baseball == self.hits[0]:
            print()  
            self.Catch()  

        elif baseball == self.hits[1]:
            print()
            self.Single()

        elif baseball == self.hits[2]:
            print()
            self.Double()

        elif baseball == self.hits[3]:
            print()
            self.Triple()

        elif baseball == self.hits[4]:
            print()
            self.HomeRun()

        self.PlayAgain()

    # What is a Miss()?
    def Miss(self):

        print ('\nYou missed the ball!')

        self.Strike()

    # What is the count?
    def Count(self):

        # global pitches

        self.pitches += 1

        print ('Strikes: ', self.strikes, sep='')
        print ('Balls: ', self.balls, '\n', sep='')
        print ('Outs: ', self.outs)
        print ('Runs: ', self.runs, '\n')

        self.Pitches()

    def Pitches(self):
        
        print('Pitches this batter: ', self.pitches, '\n')

    # What is BaseBall()?
    def BaseBall(self):

        #global position

        self.position += 1

        print ('BAAAAAAAASSSSSEEEEEE BAAAAAAAALLL!')

        self.Position()

        self.PlayAgain()

    # What is a HomeRun()?
    def HomeRun(self):

        # global position
        # global strikes
        # global balls

        print ('\nTHAT\'S A HOOOOOOOOOOOMMMMMMMMEEEEEE RUUUUUUNNNN!!!!!!!\n')

        self.position += 4

        self.strikes = 0
        self.balls = 0

        self.Position()

        self.NextBatter()    

    # What is Triple()?
    def Single(self):

        # global position

        self.position += 1

        print ('SINGLE!')

        self.Position()

        self.NextBatter()

    # What is Double()?
    def Double(self):

        # global position

        self.position += 2

        print ('DOUBLE!')

        self.Position()

        self.NextBatter()

    # What is Triple()?
    def Triple(self):

        # global position

        self.position += 3

        print ('TRIPLE!')

        self.Position()

        self.NextBatter()

    # What is Position()?
    def Position(self):

        # global position

        if self.position <= 3:
            print ('\nYou reached base', self.position, '\n')

        elif self.position % 4:
            self.AddRun()

    # What is Run()?
    def AddRun(self):
        
        # global runs
        # global strikes
        # global balls

        self.strikes = 0
        self.balls = 0

        print ('You scored a run!\n')

        self.runs += 1

    # What is Catch()?
    def Catch(self):

        print ('The fielder caught the ball.')

        self.Out()

    # What is Out()?
    def Out(self):

        # global outs

        print ('You are OUT!\n')

        while self.outs <= 3:

            self.outs += 1

            print ('Outs: ', self.outs, '\n')

            if self.outs == 3:
                print ('End of inning')
                sys.exit()

            self.NextBatter()

    # What is NextBatter()?
    def NextBatter(self):
        
        #global playing
        #global yes
        #global no
        #global pitches

        self.pitches = 0

        # Next batter?
        self.playing = input('Bring next batter?(y/n): ')

        # YAY! :D
        while self.playing in self.yes:        
            print()
            self.Play()

        # NAY! :(
        if self.playing in self.no:
            print ('\nThanks for playing!')
            sys.exit()

    # What is PlayAgain()?
    def PlayAgain(self):

        #global playing
        #global yes
        #global no

        # global pitches

        self.pitches = 0

        # Play again?
        self.playing = input('Would you like to play again?(y/n): ')

        # YAY! :D
        while self.playing in self.yes:        
            print()
            self.Play()

        # NAY! :(
        if self.playing in self.no:
            print ('\nThanks for playing!')
            sys.exit()

# Can we FINALLY play?    
# Play()

obj = PLAY()
obj.Play()


```

### types
10 Types of Pranayama Breathing (With Instructions)
Experts say that the best time to practice pranayama is early in the morning and on an empty stomach. Ideally, it would be practiced outdoors, but only if you live in a place with good air quality. Some will recommend these breathing exercises with different types of mudras while others will say to simply relax. Give each a try until you find what works for you.

#### 1. Nadi Sodhana


Sometimes referred to as alternate nostril breathing, this breathing practice is great for balancing the energy in the body.

Start in a comfortable seated position. Use the right thumb to close the right nostril. Take a deep breath in through the left nostril. Imagine the breath traveling up through the left side of the body. Pause briefly.

Next, use the ring and pinky fingers of the right hand to close the left nostril as you release the right nostril. Exhale through the right nostril imagining the breath coming down the right side of the body. Pause at the bottom of the exhale.

Keeping the left nostril closed, inhale through the right nostril. Then, use the right thumb to close the right nostril as you release the left. Exhale through the left nostril and pause gently at the bottom of the exhale.

This completes one round. Repeat this alternating pattern for several more rounds, visualizing the breath coming in and out of the body.

#### 2. Ujjayi Pranayama


I would say this pranayama is one of the most used in yoga classes today. It is the foundational breath used in the ashtanga vinyasa style of yoga.

The ujjayi breath is meant to mimic the sound of ocean waves. This rhythmic sound can help you focus your mind and link your movements to the sound of your breath.
<!--more-->
Begin by breathing through the mouth. Constrict the back of the throat, as if you are trying to fog up a mirror. Next, close the mouth and continue to breathe through the nose with the throat still constricted.

The sound of the breath can keep the mind from wandering during meditative practices.

#### 3. Kapalabhati Pranayama
You may also hear this pranayama referred to as ‘breath of fire’. The purpose of this breath is to build heat in the body and raise your vibrational pranic energy. If you have ever been to a kundalini yoga class, you have most likely done this kapalabhati.

The easiest way to understand how to do this breath is to open your mouth and begin to pant like a dog. You will exhale forcefully and the inhale will come naturally. Focus on the exhalation.

Now, close your mouth and continue the breath through your nose. Imagine your diaphragm moving in and pushing the breath out.

This is a very powerful pranayama, so it may not be best for everyone. For example, if you are pregnant, menstruating, have high blood pressure or are recovering from a recent heart attack. In any special cases, it’s best to seek the advice of a medical professional first.

#### 4. Bhramari Pranayama
When I was taught this technique, it was referred to as the ‘humming bee breath’. This gives you a good idea of what the breath should sound like.

In this pranayama, your eyes and ears will be closed. Use your thumbs to close the ears and the first two fingers to cover the eyes. Keeping the mouth closed, take a deep breath in. Then, exhale with a chant of ‘om’.

The humming sound and vibrations created by the chanting have a natural calming effect on the mind and body. Bhramari can be used to calm anxiety and relieve stress.

#### 5. Sheetli Pranayama
Sit in a comfortable position. Close the eyes and relax the body. Put the tongue on the lower lip and make a roll with the tongue. Inhale deeply through the mouth. Hold the breath for as long as possible. Close the mouth and slowly exhale through the nose.

This is one round. You can start by doing 2-3 rounds of breath, and gradually make your way up to 15 rounds.

#### 6. Bhastrika Pranayama
Otherwise known as the ‘bellows breath’ , this is very similar to kapalabhati. The main difference is that, with bhastrika, both the inhale and exhale are forceful.

Begin in a comfortable seated position. Take a deep breath in and breathe out forcefully. Immediately, breathe in with the same force. Inhale and exhale repeatedly, using the diaphragmatic muscles.

Do ten cycles of breath to complete one round. Continue for two more rounds, pausing in between rounds.

#### 7. Viloma Pranayama
Viloma is a great pranayama for beginners. It can be done sitting or lying down.

Begin by inhaling to a third of the lungs capacity, then pause for two to three seconds. Inhale another third and pause again. Next, inhale until the lungs are filled. Pause briefly before repeating this pattern on the exhale.

This is a great pranayama that helps calm the mind and relax the nervous system.

#### 8. Dirga Pranayama
Dirga is also referred to as the three-part breath because you are actively breathing into three different parts of the abdomen. This attention to the different parts of the body can help focus the mind.

You can do this exercise with sitting upright or lying on your back. I prefer lying down though. When you are lying on the ground, it’s easier to feel the breath moving through the different parts of your body.

Start by breathing into the belly and watch it expand with the breath. When the belly is full, draw in more breath expanding into the rib cage. Then, sip in just a little more air and let it fill the upper chest.

On the exhale, start from the upper chest. Release the breath allowing the heart center to sink back down. Then, release the breath from the rib cage. Finally, let the air go from the belly and draw the navel back towards the spine.

Continue at your own pace for about 10 breaths.

#### 9. Chandra Bedha


The left side of the body is associated with lunar energy, so this technique has a cooling effect on the body.

Sit in a comfortable seated position with the back straight and shoulders relaxed. Close your right nostril with your right thumb and inhale through the left nostril. Then, close the left nostril with your right index and middle fingers and exhale from the right nostril.

This is one round. You can repeat for 10 – 20 rounds. Breathing through the left nostril stimulates the lunar energy which is cooling and calming in nature, so this is best to be done in the summer.

#### 10. Surya Bedha
Also known as right nostril breathing, this pranayama stimulates the solar energy in the body which is warming and energizing.

Sit in a comfortable seated position with the back straight and shoulders relaxed. Close your left nostril with your right index and middle finger and inhale through the right nostril. Then, close the right nostril with your right thumb and exhale from the left nostril.

This is one round. You can repeat for 10 – 20 rounds.

### Yoga postures and major body systems
[pdf](pdf/yoga/instructinghatha.pdf#page=56)
#### Skeletal system
#### Muscular system
#### Digestive system
#### Reproductive system
#### Respiratory system
#### Circulatory system
#### Endocrine system
#### Nervous system

### Energetic anatomy
#### Chakras
#### Bandhas
#### Koshas
#### Energy words
`Bandhas`  `Drishti` `Gunas` `Koshas` `Mudras` `Prana`

[**Preview**]({{page.link}})
