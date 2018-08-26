<?php include 'header.php'; ?>


<main>

	<h3>Kontakt</h3>

	<form action="#" enctype="multipart/form-data" method="post">
		<fieldset>
				Anrede: <select name="anrede">
					<option>Frau</option>
					<option>Herr</option>
				</select><br>
				Vorname: <br>
				<input required name="vorname" type="text" placeholder="Vorname*" maxlength="30"><br>
				Nachname: <br>
				<input required name="nachname" type="text" placeholder="Nachname*"  maxlength="30"><br>
				E-mail: <br>
				<input type="email" name="mail" required placeholder="E-mail*"><br>
				
				Ihre Nachricht:<br>
				<textarea name="nachricht" maxlength="800" placeholder="Ihre Nachricht an uns.."></textarea><br>
				
				PDF- /Bilddatei senden:<br>
				<input type="file" name="datei" id="datei" accept="image/*, application/pdf"><br>
				
				<input type="checkbox" id="zustimmen" name="zustimmung" required>
				<label for="zustimmen">Ich weiß, dass dieses Formular keine Daten sendet</label><br>
				<input type="submit"> <input type="reset">
		</fieldset>
	</form>

</main>
	
	<?php include 'footer.php'; ?>
