<!DOCTYPE html>
<html lang="en">

<?php
$cFile = $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . 'media' . DIRECTORY_SEPARATOR . 'components.js';
$pFile = $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . 'component.php';

$content = include($pFile);
$components = $content['components'];
$jscomponents = $content['js'];

?>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Component builder for Bootstrap 3">
    <meta name="author" content="point.of.presence">

    <title>Component builder for Bootstrap 3</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <link rel="stylesheet"
          href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css">

    <link rel="stylesheet" href="/dist/css/app.css"/>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.2.0/respond.js"></script>
    <![endif]-->
</head>

<body>

<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Component Builder for Bootstrap 3</a>
        </div>

        <div id="navbar" class="collapse navbar-collapse"></div>
        <!--/.nav-collapse -->
    </div>
</nav>

<div class="container">
<div class="row">
    <div class="col-md-6">
        <div class="well">
            <h4 class="top">
                <span class="glyphicon glyphicon-share-alt"></span> Output
            </h4>

            <div id="result">
                <div id="button"></div>

                <div class="clearfix"></div>

                <p class="no-bottom has-top">
                    <textarea id="output" class="form-control input-block-level"
                              placeholder=""></textarea>
                </p>

                <div role="tabpanel" class="has-top">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#tab-component" aria-controls="component" role="tab"
                               data-toggle="tab" class="result-tab">Components</a>
                        </li>
                        <li role="presentation">
                            <a href="#tab-snippet" aria-controls="snippet" role="tab"
                               data-toggle="tab" class="result-tab">JS</a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="tab-component">
                            <form>
                                <div class="form-group">
                                    <?php foreach ($components as $k => $t): ?>
                                        <div class="col-xs-4">
                                            <div class="radio">
                                                <label>
                                                    <input id="type-<?php echo $k; ?>"
                                                           name="type"
                                                           class="gadget"
                                                           data-type="<?php echo $k; ?>"
                                                           type="radio"> <?php echo $t['name']; ?>
                                                </label>
                                            </div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </form>
                        </div>

                        <div role="tabpanel" class="tab-pane" id="tab-snippet">
                            <form>
                                <div class="form-group">
                                    <?php foreach ($jscomponents as $k => $t): ?>
                                        <div class="col-xs-4">
                                            <div class="radio">
                                                <label>
                                                    <input id="type-<?php echo $k; ?>"
                                                           name="type"
                                                           class="gadget"
                                                           data-type="<?php echo $k; ?>"
                                                           type="radio"> <?php echo $t['name']; ?>
                                                </label>
                                            </div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="well">
            <h4 class="top">
                <span class="glyphicon glyphicon-font"></span> Text
            </h4>

            <p id="input" class="no-bottom">
                <input id="name" autocomplete="off" class="form-control" type="text"
                       placeholder="Default text here">
            </p>
        </div>

        <div class="well">
            <h4 class="top">
                <span class="glyphicon glyphicon-adjust"></span> Color
            </h4>

            <div id="types" class="btn-group">
                <button name="color" type="button" class="btn btn-default"
                        data-value="0" value="btn-default">Default
                </button>

                <button name="color" type="button" class="btn btn-primary"
                        data-value="1" value="btn-primary">Primary
                </button>

                <button name="color" type="button" class="btn btn-info"
                        data-value="2" value="btn-info">Info
                </button>

                <button name="color" type="button" class="btn btn-success"
                        data-value="3" value="btn-success">Success
                </button>

                <button name="color" type="button" class="btn btn-warning"
                        data-value="4" value="btn-warning">Warning
                </button>

                <button name="color" type="button" class="btn btn-danger"
                        data-value="5" value="btn-danger">Danger
                </button>
            </div>
        </div>

        <div class="well">
            <h4 class="top">
                <span class="glyphicon glyphicon-fullscreen"></span> Size
            </h4>

            <div id="sizes">
                <div class="row">
                    <div class="col-sm-3">
                        <button class="btn btn-xs btn-primary" data-value="0"
                                type="button">X-Small
                        </button>
                    </div>

                    <div class="col-sm-3">
                        <button class="btn btn-sm btn-primary" data-value="1"
                                type="button">Small
                        </button>
                    </div>

                    <div class="col-sm-3">
                        <button class="btn btn-primary" data-value="2"
                                type="button">Default
                        </button>
                    </div>

                    <div class="col-sm-3">
                        <button class="btn btn-primary btn-lg" data-value="3"
                                type="button">Large
                        </button>
                    </div>
                </div>

                <p class="no-bottom">
                    <a href="#" class="btn btn-primary btn-block" data-toggle="button">Full
                        width</a>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="well">
    <h4 class="top">
        <span class="glyphicon glyphicon-picture"></span> Icon
    </h4>

    <div class="row">
        <div class="col-md-12">
            <div id="icons">
                <div class="row">
                    <div class="col-md-6">
                        <input id="search" type="text" autocomplete="off"
                               placeholder="Search icon" class="typeahead form-control">
                    </div>

                    <div class="col-md-6" style="text-align: right">
                        Icon position:
                        <div id="icon-position" class="btn-group">
                            <button class="btn btn-default" value="left"
                                    type="button"><span
                                    class="glyphicon glyphicon-arrow-left"></span> Left
                            </button>
                            <button class="btn btn-default" value="right" type="button">
                                Right
                                <span class="glyphicon glyphicon-arrow-right"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row has-top">
                    <div class="col-md-12">
                        <ul class="bs-glyphicons">
                            <?php foreach (include('icons.php') as $i): ?>
                                <?php
                                if (empty($i)) {
                                    $ic = 'empty-icon';
                                    $t  = 'Remove Icon';
                                } else {
                                    $ic = 'glyphicon-' . $i;
                                    $t  = 'glyphicon-' . $i;
                                }
                                ?>

                                <li>
                                    <a href="#" class="btn btn-default"
                                       data-toggle="tooltip" data-placement="bottom"
                                       title="<?php echo $t; ?>">
                                        <span class="glyphicon <?php echo $ic; ?>"></span>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<footer class="footer">
    <div class="container" style="text-align: center;padding-top: 10px;">
        <script type="text/javascript" src="//yastatic.net/share/share.js"
                charset="utf-8"></script>

        <div class="yashare-auto-init" data-yashareL10n="ru"
             data-yashareType="none"
             data-yashareQuickServices="vkontakte,facebook,twitter,odnoklassniki,moimir,lj,moikrug,gplus">
        </div>
    </div>
</footer>

    <!-- DEV -->
    <script data-main="/src/js/main"
            src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.17/require.min.js"></script>

    <!-- PROD -->
    <!-- script data-main="/dist/js/modules"
            src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.17/require.min.js"></script -->

</body>
</html>