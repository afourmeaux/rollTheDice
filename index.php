<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Roll the dices</title>
        <script src="js/script.js" type="application/javascript"></script> 
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Roll the dices</h1>
        <div id="diceList">
            <button type="button" data-faces="6" data-dices="1" class="dice" title="dices : 1 - faces : 6">D6</button>
            <button type="button" data-faces="100" data-dices="1" class="dice" title="dices : 1 - faces : 100">D100</button>
            <?php 
                if(isset($_COOKIE["addedDices"])){
                    $savedCookie = $_COOKIE["addedDices"];
                    $savedCookie = preg_split('/@@/', $savedCookie, -1, PREG_SPLIT_NO_EMPTY); //remove last line of the array
                    $savedCookieLength = count($savedCookie);

                    for($i = 0; $i < $savedCookieLength ; $i++){
                        $savedCookie[$i] = explode('##', $savedCookie[$i]);
                    }
                
                    for($i = 0; $i < $savedCookieLength; $i++){ 
                        $diceName = $savedCookie[$i][0];
                        $diceNumber = $savedCookie[$i][1];
                        $diceFaces = $savedCookie[$i][2];

                        echo '<button type="button" data-faces="' . $diceFaces . '" data-dices="' . $diceNumber . '" class="dice" title="dices : ' . $diceNumber . ' - faces : ' . $diceFaces . '">' . $diceName . '</button>';
                    } 
                }
            ?>
        </div>
        <br />
        <br />
        <form id="newDice">
            <h2>New dice</h2>
            <div class="formLine">
                <label for="newDiceName">Name :</label>
                <input type="text" name="newDiceName" id="newDiceName">
            </div>
            <div class="formLine">
                <label for="newDiceNumber">Number of dices :</label>
                <input type="number" name="newDiceNumber" id="newDiceNumber">
            </div>
            <div class="formLine">
                <label for="newDiceFaces">Number of faces :</label>
                <input type="number" name="newDiceFaces" id="newDiceFaces">
            </div>
            <div class="formLine">
                <button type="submit" class="btn btn-submit">Roll the dice</button>
            </div>
            <div class="formLine">
                <button type="button" class="btn btn-submit" id="saveDice">Save dice</button>
            </div>
        </form>
        <br />
        <div id="resultDicesTotal"></div><br />
        <div id="resultDicesEach"></div>
    </body>
</html> 