<?php

namespace App\Providers;

use Laravel\Dusk\Browser;
use Illuminate\Support\ServiceProvider;
use Facebook\WebDriver\Exception\ElementNotVisibleException;

class DuskServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        /*
        * SELECCIONAR UNA OPCION DE UN SELECT2 CON AJAX
        */
        Browser::macro('select2Modal', function ($field, $value = null, $waitSearch=1000, $wait = 2, $suffix = ' + .select2') {
            /** @var Browser $this */

            $elementSelector     = $field.$suffix;
            $highlightedSelector = 'li.select2-results__option.select2-results__option--highlighted';
            $searchSelector      = '.select2.select2-container .select2-selection--multiple input.select2-search__field';
            $inputSearchModal    = 'input-select2-modal-'. \time() .'-'. rand(1000, 100000) .'';
            $optionSearchModal   = 'option-select2-modal-'. \time() .'-'. rand(1000, 100000) .'';

            $this->click($elementSelector);

            $this->script("document.querySelector('{$searchSelector}').setAttribute('id', '{$inputSearchModal}')"); 
            $inputSearchModal = '#'. $inputSearchModal;
        
            // check if search field exists and fill it.
            if ($element = $this->element($inputSearchModal)) { //var_dump($inputSearchModal);
                try {
                    foreach ((array) $value as $item) {  
                        $element->sendKeys($item);
                        $this->pause($waitSearch);

                        $this->script("document.querySelector('{$highlightedSelector}').setAttribute('id', '{$optionSearchModal}')");
                        $optionSearchModal = '#'. $optionSearchModal;

                        $this->waitFor($optionSearchModal, $wait);
                        $this->click($optionSearchModal);
                        $this->script("document.querySelector('{$inputSearchModal}').value = ''");
                    }
        
                    return $this;
                } catch (ElementNotVisibleException $exception) {}
            }
            else {
                $element = $this->element($inputSearchModal);
                var_dump($element, $inputSearchModal, $optionSearchModal);
            }
        
            return $this;
        });
    }
}
