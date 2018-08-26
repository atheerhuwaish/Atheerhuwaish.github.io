<?php include 'header.php'; ?>
	<main>
<h3>Ihre Bilder</h3>
<strong>Senden Sie uns Ihre Bilder:</strong>


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
				
				Ihre Nachricht: (optional)<br>
				<textarea name="nachricht" maxlength="800" placeholder="Ihre Nachricht an uns.."></textarea><br>
				
				Ihre Bilder hochladen <b>(erforderlich):</b><br>
				<input required type="file" name="bilder" id="bilder" accept="image/*"><br>
				
				<input type="checkbox" id="zustimmen" name="zustimmung" required>
				<label for="zustimmen">Ich weiß, dass dieses Formular nicht funktioniert und keine Daten sendet</label><br>
				<input type="submit"> <input type="reset">
    </fieldset>
</form>


</main>
	
	<?php include 'footer.php'; ?>
