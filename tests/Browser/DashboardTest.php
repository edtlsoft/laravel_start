<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class DashboardTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function users_can_see_and_enter_the_permissions_module()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/')
                ->waitFor('#module-authetication')
                ->click('#module-authetication')
                ->assertSeeIn('#module-authetication', 'Autenticación')
                ->assertSeeIn('#link-authentication-permissions', 'Permisos')
                ->clickLink('Permisos')
                ->waitForText('Listado de Permisos')
                ->assertSee('Listado de Permisos')
                ;
        });
    }
}
