# Enhanced Axios HTTP Request Example

This guide will walk you through the features and steps to use the enhanced project:

## Features

1. **Fetch Single User**: Click 'Fetch 1 Random User' to retrieve one profile.
2. **Fetch Multiple Users**: Click 'Fetch 5 Random Users' to retrieve a batch.
3. **Filtering & Searching**: Use the search box to filter displayed users by name.
4. **More User Details**: Cards show name, age, email, location, and phone number.
5. **Theme Toggle**: Switch between light and dark modes with the toggle.

## Steps to Use

1. **Use the buttons** to fetch data:
   - 'Fetch 1 Random User' for a single profile.
   - 'Fetch 5 Random Users' for multiple profiles.
2. **Type in the search field** to filter on-the-fly by name.
3. **Toggle the theme switch** to see light/dark mode changes.

--- Modifications

## Exercise 1: Filter by Nationality

1. Modify the `fetchUsers` function so it always fetches **5** random users.
2. After fetching, filter the array to include only users whose `nat` property is `"US"` - Api to use for `"US"` nationality `https://randomuser.me/api/?results=5&nat=US` .

---

## Exercise 2: Count by Gender

1. Fetch **5** random users.
2. Iterate over the results and count how many are `"male"` and how many are `"female"` (look at the `gender` property).

---

## Exercise 3: Compute Average Age

1. Fetch **5** random users.
2. For each user, read their age from `dob.age`.
3. Calculate the average age across all fetched users.

---

## Homework

1. **Fetch two Users**: Click 'Fetch 2 Random User' to retrieve one profile.
2. **Fetch Multiple Users**: Click 'Fetch 10 Random Users' to retrieve a batch.
3. **Filtering & Searching**: Use the search box to filter displayed users by Location.
4. **More User Details**: Cards show name, age, email, location, and phone number.
5. **Theme Toggle**: Switch between light and dark modes with the toggle.
6. **Use CSS**: Link a style.css file to your JS file, and style it as you wish - Get creative!

-- Api `https://randomuser.me/api/?results`
