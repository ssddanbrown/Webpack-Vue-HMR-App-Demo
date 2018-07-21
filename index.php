<?php
	// This file represents an existing server-side application.
	// Imagine this would usually be more complex & dynamically generated.

	// You will generally want some cache-busting on any generated assets.
	// In this file some very basic busting is used (`<?php echo time(); ?\>`)
	// but this is inefficient and only an example.
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Webpack test page</title>
	<link rel="stylesheet" href="/dist/app.css?v=<?php echo time(); ?>">
</head>
<body>
	<div id="app"></div>

	<script src="/dist/app.js?v=<?php echo time(); ?>"></script>
</body>
</html>