window.onload = function (){
					for (var i = 0; i < RadioArray.length; i++){
						var radioOption = document.createElement("option");
						radioOption.innerHTML = RadioArray[i];
						radioOption.value = i;
						document.getElementById("radioDropdown").add(radioOption);
					}
					
					for (var i = 0; i < ColorArray.length; i++){
						var colorOption = document.createElement("option");
						colorOption.innerHTML = ColorNames[i];
						colorOption.value = i;
						document.getElementById("colorDropdown").add(colorOption);
					}
					
					for (var i = 0; i < ColorArray.length; i++){
						var weaponColorOption = document.createElement("option");
						weaponColorOption.innerHTML = ColorNames[i];
						weaponColorOption.value = i;
						document.getElementById("weaponColorDropdown").add(weaponColorOption);
					}
					
					for (var i = 0; i < ColorArray.length; i++){
						var playerColorOption = document.createElement("option");
						playerColorOption.innerHTML = ColorNames[i];
						playerColorOption.value = i;
						document.getElementById("playerColorDropdown").add(playerColorOption);
					}
					
					// Turn disabled on load, probably a better way for this.
					document.getElementById("playerColorDropdown").disabled = true;
					document.getElementById("playerUsername").disabled = true;
					document.getElementById("weaponText").disabled = true;
					document.getElementById("weaponColorDropdown").disabled = true;
					
				}
				var RadioArray = ["Affirmative", "Agree", "AgreeWithPlan", "BarelyDefused", "Blinded", "BombsiteClear", "BombsiteSecure", "Clear", "CoveringFriend", "DeathCry", "DefusingBomb", "Disagree", "EnemyDown", "EnemySpotted", "FollowingSir", "FriendlyFire", "GoingToGuardHostageEscapeZone", "GoingToGuardHostages", "GoingToGuardLooseBomb", "GoingToPlantBomb", "GuardingHostageEscapeZone", "GuardingHostages", "GuardingLooseBomb", "HeardNoise", "Help", "HostageBeingTaken", "InCombat", "KilledFriend", "KilledMyEnemy", "LastManStanding", "LostEnemy", "Negative", "NiceShotSir", "OnARollBrag", "OnMyWay", "OneEnemyLeft", "PinnedDown", "PlantingBomb", "RequestReport", "ScaredEmote", "SniperKilled", "SniperWarning", "SpottedBomber", "SpottedLooseBomb", "TheyPickedUpTheBomb", "ThreeEnemiesLeft", "TwoEnemiesLeft", "WaitingForHumanToDefuseBomb", "WhereIsTheBomb", "WonRound", "WonRoundQuickly", "Radio.Affirmitive", "Radio.Cheer", "Radio.Compliment", "Radio.EcoRound", "Radio.EnemyDown", "Radio.EnemySpotted", "Radio.FireInTheHole", "Radio.Flashbang", "Radio.GetOutOfThere", "Radio.GoA", "Radio.GoB", "Radio.GoGoGo", "Radio.IKilledSniper", "Radio.ImAttacking", "Radio.InPosition", "Radio.LocBack", "Radio.LocBombA", "Radio.LocBombB", "Radio.LocCatwalk", "Radio.LocConnector", "Radio.LocDoor", "Radio.LocDoubleDoors", "Radio.LocEnemySpawn", "Radio.LocFront", "Radio.LocHostage", "Radio.LocHostageEscapeZone", "Radio.LocHut", "Radio.LocLong", "Radio.LocMid", "Radio.LocOurSpawn", "Radio.LocOverpass", "Radio.LocPalace", "Radio.LocPlatform", "Radio.LocRamp", "Radio.LocSnipersNest", "Radio.LocStairs", "Radio.Molotov", "Radio.MyHeadshot", "Radio.NeedBackup", "Radio.NeedDecoy", "Radio.NeedDrop", "Radio.NeedLeader", "Radio.NeedPlan", "Radio.NeedQuiet", "Radio.NeedSmoke", "Radio.Negative", "Radio.Num1", "Radio.Num2", "Radio.Num3", "Radio.Num4", "Radio.Num5", "Radio.Num6", "Radio.Num7", "Radio.Num8", "Radio.Num9", "Radio.Num10", "Radio.PickedUpC4", "Radio.PlantingAtA", "Radio.PlantingAtB", "Radio.Regroup", "Radio.ReportInTeam", "Radio.ReportingIn", "Radio.Roger", "Radio.RoundLost", "Radio.SawHeadshot", "Radio.SectorClear", "Radio.Sorry", "Radio.SpendRound", "Radio.SpreadOut", "Radio.StickTogether", "Radio.TakingFire", "Radio.TeamFallBack", "Radio.Thanks", "Radio.WePlanted", "Radio.getout", "Radio.go", "Radio.letsgo", "Radio.locknload", "Guardian.RoundStart", "Guardian.Victory", "Guardian.HalfwayThere"];
				var ColorNames = ["Team Color", "White", "Grey (Consumer Grade)", "Light Red", "Dark Red", "Red (Covert)", "Orchid (Classified)", "Gold", "Light Green", "Lime (Money Color)", "Green", "Blue (Industrial Grade)", "Dark Blue (Mil-Spec Grade)"];
				var ColorArray = ["", 			"",	 "",					 "",			"",		 "",			 "",			   	 "", "",			 "", 				"", "", 						""];
				var ColorHexes = ["#000000", 		"#ffffff", "#c5cad0", 			"#eb4b4b",		"#ff0000", "#ff4040", 		"#d32ce6", 			"#e4ae39", "#bfff90", 	"#a2ff47", 				"#40ff40", "#5e98d9", 				"#4b69ff"];
				// Line break seems buggy on many.
				// Player indicator on grey seems buggy, only tested on grey.
				
				var RadioPrefix = "playerchatwheel";
				var RadioCommand = RadioArray[0];
				var preLineBreak = "";
				var newLine = false;
				var LinePrefix = "";
				var PlayerIndicator = "";
				var PlayerColor = "";
				var PlayerName = "";
				var UsernameChecked = false;
				var ColorPrefix = "";
				var TextLine = "";
				var KnifePrefix = "";
				var StPrefix = "";
				var WeaponColor = "";
				var weaponChecked = false;
				var WeaponPrefix = "";
				var Color1 = "#000";
				var Color2 = "#fff";
				
				/*	// PreLineBreak
					
					// Implement certain voiceline
					
					// New line checkbox
					
					// Playerindicator
					
					// Player checkbox
					
					// Player color
					
					// Player name
					
					// Text color
					
					// Text
					
					// Knife checkbox
					
					// StatTrak checkbox
					
					// Weapon checkbox
					
					// Weapon color
					
					// Weapon text
					*/
					
				function setPageColor(themeName){
					// Green Beam
					if (themeName == "greenBeam"){
						document.documentElement.style.setProperty("--color1", "#45ffa2");
						document.documentElement.style.setProperty("--color2", "#c4ffdd");
						document.documentElement.style.setProperty("--color3", "#e3ffef");
						document.documentElement.style.setProperty("--color4", "#c4ffdd");
						document.documentElement.style.setProperty("--color5", "#42ffa1");
						document.documentElement.style.setProperty("--textcolor", "#313142");
						document.documentElement.style.setProperty("--buttonIndicatorOff", "white");
						document.documentElement.style.setProperty("--buttonIndicatorOn", "#ffe342");
					}
					// Dreamy World
					if (themeName == "dreamyWorld"){
						document.documentElement.style.setProperty("--color1", "#e6c8ff");
						document.documentElement.style.setProperty("--color2", "#c0faf5");
						document.documentElement.style.setProperty("--color3", "#dcfaf5");
						document.documentElement.style.setProperty("--color4", "#dcd5fc");
						document.documentElement.style.setProperty("--color5", "#e2c3f4");
						document.documentElement.style.setProperty("--buttonIndicatorOff", "#e659ff");
						document.documentElement.style.setProperty("--buttonIndicatorOn", "lime");
					}
					// Light Theme
					if (themeName == "lightTheme"){
						document.documentElement.style.setProperty("--color1", "#ededed");
						document.documentElement.style.setProperty("--color2", "#ffffff");
						document.documentElement.style.setProperty("--color3", "#ffffff");
						document.documentElement.style.setProperty("--color4", "#ededed");
						document.documentElement.style.setProperty("--color5", "#ededed");
						document.documentElement.style.setProperty("--buttonIndicatorOff", "#ff0000ab");
						document.documentElement.style.setProperty("--buttonIndicatorOn", "lime");
					}
					// Black Theme
					if (themeName == "blackTheme"){
						document.documentElement.style.setProperty("--color1", "#000");
						document.documentElement.style.setProperty("--color2", "#000");
						document.documentElement.style.setProperty("--color3", "#000");
						document.documentElement.style.setProperty("--color4", "#000");
						document.documentElement.style.setProperty("--color5", "#000");
						document.documentElement.style.setProperty("--textcolor", "fff");
					}
					// White Theme
					if (themeName == "whiteTheme"){
						document.documentElement.style.setProperty("--color1", "#fff");
						document.documentElement.style.setProperty("--color2", "#fff");
						document.documentElement.style.setProperty("--color3", "#fff");
						document.documentElement.style.setProperty("--color4", "#fff");
						document.documentElement.style.setProperty("--color5", "#fff");
						document.documentElement.style.setProperty("--textcolor", "#000");
					}
					// Neon Blue
					// #05ffe8
					
				}
				
				function changeValue(targetValue, resultValue){
					document.getElementById(targetValue).value = resultValue;
					selectionChanged(document.getElementById(targetValue));
				}
				
				function changeChecked(targetValue, resultValue){
					document.getElementById(targetValue).checked = resultValue;
					selectionChanged(document.getElementById(targetValue));
				}
				
				function resetCB(targetCB){
					/*
						:param document.getElementById("ID") targetCB: Unchecks checkbox for given ID.
					*/ 
					document.getElementById(targetCB.id).checked = false;
					selectionChanged(targetCB);
				}
				
				function selectionChanged(currentSelection){
					if(currentSelection.id == "preLineBreak"){
						if(currentSelection.value == ""){
							preLineBreak = "";
						}
						else{
							preLineBreak = currentSelection.value;
						}
					}
					if(currentSelection.id == "radioDropdown"){
						RadioCommand = RadioArray[parseInt(currentSelection.value)];
					}
					if(currentSelection.id == "lineBreakCheck"){
						if(currentSelection.checked){
							LinePrefix = " ";
							document.documentElement.style.setProperty("--buttonIndicatorColor", "var(--buttonIndicatorOn)");
						}
						else{
							LinePrefix = "";
							document.documentElement.style.setProperty("--buttonIndicatorColor", "var(--buttonIndicatorOff)");
						}
					}
					if(currentSelection.id == "playerIndicatorCheck"){
						if(currentSelection.checked){
							if(document.getElementById("colorDropdown").value == "0"){
								PlayerIndicator = "";
							}
							else{
								PlayerIndicator = "";
							}
							document.documentElement.style.setProperty("--buttonIndicatorColor1", "var(--buttonIndicatorOn)");
						}
						else{
							PlayerIndicator = "";
							document.documentElement.style.setProperty("--buttonIndicatorColor1", "var(--buttonIndicatorOff)");
						}
					}
					if(currentSelection.id == "playerNameCheck"){
						if(currentSelection.checked){
							UsernameChecked = true;
							document.getElementById("playerDiv").className = "gridboxinset";
							document.getElementById("playerColorDropdown").disabled = false;
							document.getElementById("playerUsername").disabled = false;
							selectionChanged(document.getElementById("playerColorDropdown"));
							selectionChanged(document.getElementById("playerUsername"));
							document.documentElement.style.setProperty("--buttonIndicatorColor4", "var(--buttonIndicatorOn)");
						}
						else{
							UsernameChecked = false;
							PlayerColor = "";
							PlayerName = "";
							document.getElementById("playerDiv").className = "gridbox";
							document.getElementById("playerColorDropdown").disabled = true;
							document.getElementById("playerUsername").disabled = true;
							document.documentElement.style.setProperty("--buttonIndicatorColor4", "var(--buttonIndicatorOff)");
						}
					}
					if(currentSelection.id == "playerUsername"){
						if(UsernameChecked){
							if(currentSelection.value == ""){
								PlayerName = "YourUserName";
							}
							else{
								PlayerName = currentSelection.value;
							}
						}
						else{
							PlayerName = "";
						}
						PlayerName += " ";
					}
					if(currentSelection.id == "playerColorDropdown"){
						PlayerColor = ColorArray[parseInt(currentSelection.value)];
						document.getElementById("playerUsername").style.color = ColorHexes[parseInt(currentSelection.value)];
						var shadowColor = "#fff";
						if(currentSelection.value == 0 || currentSelection.value == 2 || currentSelection.value == 6 || currentSelection.value == 11 || currentSelection.value == 12){
							shadowColor = "#fff";
							document.getElementById("playerUsername").style.textShadow = "-1px -1px 0 " + shadowColor + ", 0 -1px 0 " + shadowColor + ", 1px -1px 0 " + shadowColor + ", 1px 0 0 " + shadowColor + ", 1px 1px 0 " + shadowColor + ", 0 1px 0 " + shadowColor + ", -1px 1px 0 " + shadowColor + ",	-1px 0 0 " + shadowColor;
						};
						if(currentSelection.value == 1 || currentSelection.value == 3 || currentSelection.value == 4 || currentSelection.value == 5 || currentSelection.value == 7 || currentSelection.value == 8 || currentSelection.value == 9 || currentSelection.value == 10){
							shadowColor = "#000";
							document.getElementById("playerUsername").style.textShadow = "-1px -1px 0 " + shadowColor + ", 0 -1px 0 " + shadowColor + ", 1px -1px 0 " + shadowColor + ", 1px 0 0 " + shadowColor + ", 1px 1px 0 " + shadowColor + ", 0 1px 0 " + shadowColor + ", -1px 1px 0 " + shadowColor + ",	-1px 0 0 " + shadowColor;
						};
					}
					if(currentSelection.id == "colorDropdown"){
						ColorPrefix = ColorArray[parseInt(currentSelection.value)];
						document.getElementById("mainText").style.color = ColorHexes[parseInt(currentSelection.value)];
						var shadowColor = "#fff";
						if(currentSelection.value == 0 || currentSelection.value == 2 || currentSelection.value == 6 || currentSelection.value == 11 || currentSelection.value == 12){
							shadowColor = "#fff";
							document.getElementById("mainText").style.textShadow = "-1px -1px 0 " + shadowColor + ", 0 -1px 0 " + shadowColor + ", 1px -1px 0 " + shadowColor + ", 1px 0 0 " + shadowColor + ", 1px 1px 0 " + shadowColor + ", 0 1px 0 " + shadowColor + ", -1px 1px 0 " + shadowColor + ",	-1px 0 0 " + shadowColor;
						};
						if(currentSelection.value == 1 || currentSelection.value == 3 || currentSelection.value == 4 || currentSelection.value == 5 || currentSelection.value == 7 || currentSelection.value == 8 || currentSelection.value == 9 || currentSelection.value == 10){
							shadowColor = "#000";
							document.getElementById("mainText").style.textShadow = "-1px -1px 0 " + shadowColor + ", 0 -1px 0 " + shadowColor + ", 1px -1px 0 " + shadowColor + ", 1px 0 0 " + shadowColor + ", 1px 1px 0 " + shadowColor + ", 0 1px 0 " + shadowColor + ", -1px 1px 0 " + shadowColor + ",	-1px 0 0 " + shadowColor;
						};
					}
					if(currentSelection.id == "mainText"){
						TextLine = currentSelection.value;
					}
					if(currentSelection.id == "knifeCheck"){
						if(currentSelection.checked){
							KnifePrefix = "★ ";
							document.documentElement.style.setProperty("--buttonIndicatorColor2", "var(--buttonIndicatorOn)");
						}
						else{
							KnifePrefix = "";
							document.documentElement.style.setProperty("--buttonIndicatorColor2", "var(--buttonIndicatorOff)");
						}
					}
					if(currentSelection.id == "stCheck"){
						if(currentSelection.checked){
							StPrefix = "StatTrak™ ";
							document.documentElement.style.setProperty("--buttonIndicatorColor3", "var(--buttonIndicatorOn)");
						}
						else{
							StPrefix = "";
							document.documentElement.style.setProperty("--buttonIndicatorColor3", "var(--buttonIndicatorOff)");
						}
					}
					if(currentSelection.id == "weaponCheck"){
						if(currentSelection.checked){
							weaponChecked = true;
							document.getElementById("weaponDiv").className = "gridboxinset";
							document.getElementById("weaponText").disabled = false;
							document.getElementById("weaponColorDropdown").disabled = false;
							selectionChanged(document.getElementById("weaponText"));
							selectionChanged(document.getElementById("weaponColorDropdown"));
							document.documentElement.style.setProperty("--buttonIndicatorColor5", "var(--buttonIndicatorOn)");
						}
						else{
							weaponChecked = false;
							WeaponPrefix = "";
							WeaponColor = "";
							document.getElementById("weaponDiv").className = "gridbox";
							document.getElementById("weaponText").disabled = true;
							document.getElementById("weaponColorDropdown").disabled = true;
							document.documentElement.style.setProperty("--buttonIndicatorColor5", "var(--buttonIndicatorOff)");
						}
					}
					if(currentSelection.id == "weaponColorDropdown"){
						WeaponColor = ColorArray[parseInt(currentSelection.value)];
						document.getElementById("weaponText").style.color = ColorHexes[parseInt(currentSelection.value)];
						var shadowColor = "#fff";
						if(currentSelection.value == 0 || currentSelection.value == 2 || currentSelection.value == 6 || currentSelection.value == 11 || currentSelection.value == 12){
							shadowColor = "#fff";
							document.getElementById("weaponText").style.textShadow = "-1px -1px 0 " + shadowColor + ", 0 -1px 0 " + shadowColor + ", 1px -1px 0 " + shadowColor + ", 1px 0 0 " + shadowColor + ", 1px 1px 0 " + shadowColor + ", 0 1px 0 " + shadowColor + ", -1px 1px 0 " + shadowColor + ",	-1px 0 0 " + shadowColor;
						};
						if(currentSelection.value == 1 || currentSelection.value == 3 || currentSelection.value == 4 || currentSelection.value == 5 || currentSelection.value == 7 || currentSelection.value == 8 || currentSelection.value == 9 || currentSelection.value == 10){
							shadowColor = "#000";
							document.getElementById("weaponText").style.textShadow = "-1px -1px 0 " + shadowColor + ", 0 -1px 0 " + shadowColor + ", 1px -1px 0 " + shadowColor + ", 1px 0 0 " + shadowColor + ", 1px 1px 0 " + shadowColor + ", 0 1px 0 " + shadowColor + ", -1px 1px 0 " + shadowColor + ",	-1px 0 0 " + shadowColor;
						};
					}
					if(currentSelection.id == "weaponText"){
						if(weaponChecked){
							if(currentSelection.value == ""){
								WeaponPrefix = "Your Weapon | Of Choice";
							}
							else{
								WeaponPrefix = currentSelection.value;
							}
						}
						else{
							WeaponPrefix = "";
						}
					}
					else {
						console.log("Not sure why this gets triggered. " + currentSelection);
					}
					createRadioCommand();
				}
				
				function copyRadioCommand(){
					var copyText = document.getElementById("result");
					copyText.select();
					copyText.setSelectionRange(0, 99999);
					document.execCommand("copy");
					// Add copyText to history array
					
					// Make a pop-up for this
					// alert("Copied: " + copyText.value);
				}
				
				function createRadioCommand(){
					document.getElementById("result").value = RadioPrefix + " " + RadioCommand + ' "' + preLineBreak + LinePrefix + PlayerIndicator + PlayerColor + PlayerName + ColorPrefix + TextLine + WeaponColor + KnifePrefix + StPrefix + WeaponPrefix + '"';
				}
				
				// Preset1
				function savedYouBy(){
					// PreLineBreak
					changeValue("preLineBreak", "My bad!");
					
					// Voice line Sorry!
					changeValue("radioDropdown", 117);
					
					// New line checkbox
					changeChecked("lineBreakCheck", true);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "Playername");
					};
					
					// Player color
					changeValue("playerColorDropdown", 9);
					
					// Text color
					changeValue("colorDropdown", 9);
					
					// Text
					changeValue("mainText", "saved you by killing XDXDXD!");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset2
				function gotVACCED(){
					// PreLineBreak
					changeValue("preLineBreak", "My bad!");
					
					// Implement certain voiceline
					changeValue("radioDropdown", 117);
					
					// New line checkbox
					changeChecked("lineBreakCheck", true);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player color
					changeValue("playerColorDropdown", 4);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "Playername");
					};
					
					// Text color
					changeValue("colorDropdown", 4);
					
					// Text
					changeValue("mainText", "has been permanently banned from official CS:GO servers.");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset3
				function dayBan(){
					// PreLineBreak
					changeValue("preLineBreak", "My bad!");
					
					//Voice line Sorry
					changeValue("radioDropdown", 117);
					
					// New line checkbox
					changeChecked("lineBreakCheck", true);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player color
					changeValue("playerColorDropdown", 4);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "Playername");
					};
					
					// Text color
					changeValue("colorDropdown", 4);
					
					// Text
					changeValue("mainText", "abandoned the match and received a 7 day competitive matchmaking cooldown.");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset4
				function gotConvicted(){
					// PreLineBreak
					changeValue("preLineBreak", "My bad!");
					
					// Sorry!
					changeValue("radioDropdown", 117);
					
					// New line checkbox
					changeChecked("lineBreakCheck", true);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player color
					changeValue("playerColorDropdown", 1);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "Playername");
					};
					
					// Text color
					changeValue("colorDropdown", 1);
					
					// Text
					changeValue("mainText", "left the game (Account is Convicted)");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset5
				function gotReward(){
					// PreLineBreak
					changeValue("preLineBreak", "Cheer! +$69: ");
					
					changeValue("radioDropdown", 52);
					
					// New line checkbox
					changeChecked("lineBreakCheck", false);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player color
					changeValue("playerColorDropdown", 1);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "Playername");
					};
					
					// Text color
					changeValue("colorDropdown", 1);
					
					// Text
					changeValue("mainText", "has been awarded for shanking your mum!");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset6
				function friendDog(){
					// PreLineBreak
					changeValue("preLineBreak", "Cheer!");
					
					// Voice line - Cheer!
					changeValue("radioDropdown", 52);
					
					// New line checkbox
					changeChecked("lineBreakCheck", true);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player color
					changeValue("playerColorDropdown", 0);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "YourFriend :");
					};
					
					// Text color
					changeValue("colorDropdown", 1);
					
					// Text
					changeValue("mainText", "I'm a dog, woof-woof! :P");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset7
				function doMoan(){
					// PreLineBreak
					changeValue("preLineBreak", "Ahhh~");
					
					// Voice line Moaning! deathcry
					changeValue("radioDropdown", 9);
					
					// New line checkbox
					changeChecked("lineBreakCheck", false);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", false);
					
					// Player color
					changeValue("playerColorDropdown", 0);
					
					// Player name
					changeValue("playerUsername", "");
					
					// Text color
					changeValue("colorDropdown", 0);
					
					// Text
					changeValue("mainText", "");
					
					// Knife checkbox
					changeChecked("knifeCheck", false);
					
					// StatTrak checkbox
					changeChecked("stCheck", false);
					
					// Weapon checkbox
					changeChecked("weaponCheck", false);
					
					// Weapon color
					changeValue("weaponColorDropdown", 0);
					
					// Weapon text
					changeValue("weaponText", "");
				}
				
				// Preset8
				function openCase(){
					// PreLineBreak
					changeValue("preLineBreak", "Cheer!");
					
					// Voice line Cheer!
					changeValue("radioDropdown", 52);
					
					// New line checkbox
					changeChecked("lineBreakCheck", true);
					
					// Playerindicator
					changeChecked("playerIndicatorCheck", false);
					
					// Player checkbox
					changeChecked("playerNameCheck", true);
					
					// Player color
					changeValue("playerColorDropdown", 0);
					
					// Player name
					if(document.getElementById("playerUsername").value == ""){
						changeValue("playerUsername", "Playername");
					};
					
					// Text color
					changeValue("colorDropdown", 1);
					
					// Text
					changeValue("mainText", "has opened a container and found: ");
					
					// Knife checkbox
					changeChecked("knifeCheck", true);
					
					// StatTrak checkbox
					changeChecked("stCheck", true);
					
					// Weapon checkbox
					changeChecked("weaponCheck", true);
					
					// Weapon color
					changeValue("weaponColorDropdown", 5);
					
					// Weapon text
					changeValue("weaponText", "Karambit | Doppler");
				}
				
				// Your teammate x was awarded +$300 compensation for shanking your mum.
				// Sex~
				// Nein!
				/* playerradio deathcry "RUSSIAAA  ▦▦▦▦▦▦▦▦▦▦  ▦▦▦▦▦▦▦▦▦▦  ▦▦▦▦▦▦▦▦▦▦" */
				// Cheer! - Hahahahhaha all colors
