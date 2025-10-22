---
    title: "Hallo"
    layout: "base.njk"
    templateEngineOverride: njk,md
---

## hoi


{% include "postlist.njk"%}

## Avatar

Handmatig ingevoerd in markdown

<img src="https://github.com/user-attachments/assets/51415367-c1f5-42bf-8980-e83647f9c667" width="200" height="200" alt="Logo AD FDND">


Data geladen:
<img src="{{ catpic }}" width="200" height="200" alt="Dylan">


<form action="" method="post">
  <fieldset>
    <label for="one">one</label>
    <input type="text" name="one" id="one">
  </fieldset>

  <fieldset>
    <label for="two">two</label>
    <input type="number" name="two" id="two">
  </fieldset>

  <fieldset>
    <label for="three">three</label>
    <input type="date" name="three" id="three">
  </fieldset>

  <fieldset>
    <legend>Four</legend>
    <label for="four-1">
      <input type="radio" name="four" id="four-1" value="1"> Option 1
    </label>
    <label for="four-2">
      <input type="radio" name="four" id="four-2" value="2"> Option 2
    </label>
    <label for="four-3">
      <input type="radio" name="four" id="four-3" value="3"> Option 3
    </label>
  </fieldset>

  <fieldset>
    <legend>Five</legend>
    <label for="five-1">
      <input type="checkbox" name="five" id="five-1" value="1"> Option 1
    </label>
    <label for="five-2">
      <input type="checkbox" name="five" id="five-2" value="2"> Option 2
    </label>
    <label for="five-3">
      <input type="checkbox" name="five" id="five-3" value="3"> Option 3
    </label>
  </fieldset>

  <input type="submit" value="verstuur">
</form>


<details>
<summary>open me</summary>
    this is hidden for now
    <button> klik me</button>
</details>

