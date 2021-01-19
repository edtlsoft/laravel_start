<?php

namespace Tests\Browser\Authentication;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use App\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UsersCanDeletePermissionsTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_delete_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $permission = Permission::factory()->create(['name' => 'permission_to_delete', 'created_at' => now()->addMinute()]);

        $this->browse(function (Browser $browser) use ($user, $permission) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('.btn-permissions-delete')
                ->click('.btn-permissions-delete')
                ->waitForText("¿Está realmente seguro de eliminar el permiso {$permission->name}?")
                ->assertSee("¿Está realmente seguro de eliminar el permiso {$permission->name}?")
                ->click('.swal2-confirm')
                ->waitForText('El permiso se elimino correctamente de la base de datos.')
                ->assertSee('El permiso se elimino correctamente de la base de datos.')
                ;
        });
    }

}
