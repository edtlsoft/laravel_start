<?php

namespace Tests\Browser\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UsersCanLoginTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function registered_users_can_login_with_email()
    {
        $user = User::factory()->create(['email' => 'edward@edtlsoft.com']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
                ->type('username', 'edward@edtlsoft.com')
                ->type('password', 'password')
                ->press('@btn-login')
                ->waitForText('Dashboard')
                ->assertSee('Dashboard')
                ->assertPathIs('/')
                ->assertAuthenticatedAs($user);
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function registered_users_can_login_with_username()
    {
        $user = User::factory()->create(['username' => 'edward']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->logout()->visit('/login')
                ->type('username', 'edward')
                ->type('password', 'password')
                ->press('@btn-login')
                ->waitForText('Dashboard')
                ->assertSee('Dashboard')
                ->assertPathIs('/')
                ->assertAuthenticatedAs($user);
        });
    }

    /** @test */
    public function users_cannot_login_with_invalid_information()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                ->type('username', 'email@email.com')
                ->type('password', 'password')
                ->press('@btn-login')
                ->waitForText('Credenciales incorrectas')
                ->assertSee('Credenciales incorrectas')
                ->assertPathIs('/login')
            ;
        });
    }
}
