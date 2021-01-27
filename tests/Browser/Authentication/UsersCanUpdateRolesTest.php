<?php

namespace Tests\Browser\Authentication;

use App\Models\Role;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UsersCanUpdateRolesTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_update_roles()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        Role::factory()->count(2)->create(['created_at' => now()->addMinutes(2)]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/roles')
                ->waitFor('.btn-role-update')
                ->click('.btn-role-update')
                ->whenAvailable('#modal-role-form', function ($modal) {
                    $modal->assertSee('ACTUALIZAR ROLE')
                        ->type('@role-name', 'Updated Role')
                        ->type('@role-description', 'This role was updated')
                        ->press('@btn-manage-role')
                        ;
                })
                ->waitForText('El rol se actualizo correctamente.')
                ->assertSee('El rol se actualizo correctamente.')
                ->click('.swal2-confirm')
                ->waitForText('Updated Role')
                ->assertSee('Updated Role')
                ;
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function unauthorized_users_can_not_update_roles()
    {
        $user = $this->create_user([], [], ['name' => 'roles_index']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/roles')
                ->waitFor('.btn-role-update')
                ->click('.btn-role-update')
                ->whenAvailable('#modal-role-form', function ($modal) {
                    $modal->assertSee('ACTUALIZAR ROLE')
                        ->type('@role-name', 'Updated Role')
                        ->type('@role-description', 'This is role was updated')
                        ->press('@btn-manage-role')
                        ;
                })
                ->waitForText('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ->assertSee('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ;
        });
    }
}
