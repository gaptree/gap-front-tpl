export function scriptJson(obj) {
    return '<script type="text/javascript">'
            + JSON.stringify(obj)
            + '</script>'
            + '<div class="data-rendering"></div>';
}
