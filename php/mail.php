<?php
if ($_POST) 
{
    $to = htmlspecialchars($_POST["email"]);
    if (!$email) 
    {
	$json['error'] = 'Укажите ваш email!';
	echo json_encode($json);
	die();
    }
    if(!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) 
    {
	$json['error'] = 'Нe вeрный фoрмaт email! >_<';
	echo json_encode($json);
	die();
    }

    $subject = 'Благодарим за подписку';

    $message= '
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset="utf-8" />
    	<title>Почтовый шаблон</title>
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
          }

          .logo {
                margin: 55px 0px 0px 230px;
          }
          p {
            color: #ffffff;
            font-family: Roboto;
            font-weight: bold;
            font-size: 14pt;
          }
        </style>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      </head>
      <body>
        <table style="background-image: url(img/bg_1.png); width: 594px; height: 600px;">
            <tr>
              <td valign = top>
                <a href="http://cubaprint.ru"><img src="img/logo.png" class="logo"></a>
              </td>
            </tr>
            <tr>
              <td>
                <p style="margin: -100px 0px 0px 100px;"> Спасибо, что подписались. Мы ценим вас.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p style="margin: 0px 0px 5px 50px;">Тел. (8362)38-53-53<br>Эшкинина 10б, оф 106<br>Viber/Whatsapp 8-927-888-08-58</p>
              </td>
              <td>
                <a href="https://www.instagram.com/cuba_print/"><img src="img/inst.png"></a>
      	        <a href="https://vk.com/cubaprint"><img src="img/vk.png" style="margin: 0px 50px 0px 0px"></a>
              </td>
            </tr>   
        </table>
      </body>
    </html>
    ';

    function mime_header_encode($str, $data_charset, $send_charset) 
    {
	if($data_charset != $send_charset)
	$str=iconv($data_charset,$send_charset.'//IGNORE',$str);
	return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
    }

    class TEmail 
    {
	public $from_email;
	public $from_name;
	public $to_email;
	public $subject;
	public $data_charset='UTF-8';
	public $send_charset='windows-1251';
	public $body='';
	public $type='text/plain';

        function send()
        {
	    $dc=$this->data_charset;
	    $sc=$this->send_charset;
	    $enc_to=mime_header_encode($this->to_name,$dc,$sc).' <'.$this->to_email.'>';
	    $enc_subject=mime_header_encode($this->subject,$dc,$sc);
	    $enc_from=mime_header_encode($this->from_name,$dc,$sc).' <'.$this->from_email.'>';
	    $enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
	    $headers='';
	    $headers.="Mime-Version: 1.0\r\n";
	    $headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
	    $headers.="From: ".$enc_from."\r\n";
	    return mail($enc_to,$enc_subject,$enc_body,$headers);
        }
    }

    $emailgo= new TEmail;
    $emailgo->from_email= 'mihachug@gmail.com';
    $emailgo->from_name= 'CubaPrint';
    $emailgo->to_email= $email;
    $emailgo->subject= $subject;
    $emailgo->body= $message;
    $emailgo->send();

    $json['error'] = 0;

    echo json_encode($json);
} else 
  {
           echo 'GET LOST!';
  }
?>