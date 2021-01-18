<?php

namespace Tests\Browser\Authentication;

use App\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UsersCanUpdatePermissionsTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_update_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        Permission::factory()->count(2)->create(['created_at' => now()->addMinutes(2)]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('@btn-permissions-update')
                ->click('@btn-permissions-update')
                ->whenAvailable('#modal-permission-form', function ($modal) {
                    $modal->assertSee('ACTUALIZAR PERMISO')
                        ->type('@permission-name', 'permission_updated')
                        ->type('@permission-description', 'This permission was updated')
                        ->press('@btn-manage-permission')
                        ;
                })
                ->waitForText('El permiso se actualizo correctamente.')
                ->assertSee('El permiso se actualizo correctamente.')
                ->click('.swal2-confirm')
                ->waitForText('permission_updated')
                ->assertSee('permission_updated')
                ;
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function unauthorized_users_can_not_update_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'permissions_index']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('@btn-permissions-update')
                ->click('@btn-permissions-update')
                ->whenAvailable('#modal-permission-form', function ($modal) {
                    $modal->assertSee('ACTUALIZAR PERMISO')
                        ->type('@permission-name', 'permission_updated')
                        ->type('@permission-description', 'This is permission was updated')
                        ->press('@btn-manage-permission')
                        ;
                })
                ->waitForText('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ->assertSee('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ;
        });
    }
}
