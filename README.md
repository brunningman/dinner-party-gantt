# Holiday Dinner Prep Planner

An app that outlines a day-of schedule for kitchen appliances for a holiday meal i.e. Thanksgiving.

[https://docs.google.com/spreadsheets/d/1v9uQES9m871BIJ04I8L4c07xW07EnZ6EvMOhztTdcvo/edit?usp=sharing]
Day of tab

Like this, but more interactable and prettier.

## Tech Stuff
Python 3.7.1

### Useage
Run Server
'''python dinner-party-gantt.py'''
Build/Watch for Dev (from /app/public directory)
'''npm run watch'''

## Requirements
Have default appliance/work types
- Stovetop
- Oven
- Refrigerator (Rest)
- Countertop (Rest)
- Countertop (Active)
User Actions
- Add line items with associated appliance/work, description, and recipe name
- Move items around the chart by click and drag
- Increase or decrease an item’s time commitment by dragging ends
- Edit a line item’s information/associations
- Set a line item’s cook temp if applicable
UI
- Minimalistic gantt chart
- Fall/winter color palette
- Easily findable buttons and interactions


## Stretch
- Login system to save user kitchen setup
- Allow for multiples of the same appliances in kitchen setup
- Show warnings for overlapping/conflicting assignments
- Recipe builder/saver
- Algorithm to automatically plan the day from a list of recipes
- Allow for multiple day-of charts
- Shopping lists with total amounts, and per-store lists
