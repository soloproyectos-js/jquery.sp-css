/**
 * jQuery.spCss - A CSS helper plugin for jQuery.
 *
 * This plugin requires: 
 *      1. jQuery ~2.0
 *
 * @author    Gonzalo Chumillas <gchumillas@email.com>
 * @license   https://github.com/soloproyectos-js/jquery.sp-css/blob/master/LICENSE MIT License
 * @link      https://github.com/soloproyectos-js/jquery.sp-css
 */
(function ($) {
    
    /**
     * Available methods
     * @var {Object}
     */
    var methods = {
        /**
         * Encodes a css parameter.
         *
         * For example:
         * ```JavaScript
         * ```
         *
         * @param {string} text Text to be encoded
         *
         * @return   {string}
         */
        'encode': function (text) {
            return text.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
        }
    };
    
    /**
     * Registers plugin.
     * 
     * @param {string} methodName Method name
     * @param {mixed}  args,...   Additional arguments (not required)
     * 
     * @return {mixed}
     */
    $.spCss = function (methodName, args) {
        var method = methods[methodName];
        var args = Array.prototype.slice.call(arguments, 1);
        
        if (method === undefined) {
            $.error('Method not found: ' + methodName);
        }
        
        return method.apply(this, args);
    };
})(jQuery);
