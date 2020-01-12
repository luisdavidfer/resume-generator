<?php
    
    // Data saved to json variable
    $_REQUEST["color"] = "#".$_REQUEST["color"];
    $json = json_encode($_REQUEST, JSON_PRETTY_PRINT);
    
    // Exports json to data.json file
    
    $file = fopen("uploads/data.json", "w");
    fwrite($file, $json);
    fclose($file);

    // Save uploaded image to desired directory
    
    $tmp_name = $_FILES["photo"]["tmp_name"];
    $name = "photo";
    move_uploaded_file($tmp_name, "uploads/img/$name");

    // Zip files through recursive compression

    $zip = "resume.zip";
    recursiveZip("uploads", $zip);

    // Download zip
    
    if (file_exists($zip)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($zip).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($zip));
        readfile($zip);
        exit;
    }

   
    // Recursive zip function

    function recursiveZip($source, $destination) {
        if (extension_loaded('zip') === true) {
            if (file_exists($source) === true) {
                $zip = new ZipArchive();
                if ($zip->open($destination, ZIPARCHIVE::CREATE) === true) {
                    $source = realpath($source);
                    if (is_dir($source) === true) {
                        $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source), RecursiveIteratorIterator::SELF_FIRST);
                        foreach ($files as $file) {
                            $file = realpath($file);
                            if (is_dir($file) === true) {
                                $zip->addEmptyDir(str_replace($source . '/', '', $file . '/'));
                            } else if (is_file($file) === true) {
                                $zip->addFromString(str_replace($source . '/', '', $file), file_get_contents($file));
                            }
                        }
                    } else if (is_file($source) === true) {
                        $zip->addFromString(basename($source), file_get_contents($source));
                    }
                }
                return $zip->close();
            }
        }
        return false;
    }