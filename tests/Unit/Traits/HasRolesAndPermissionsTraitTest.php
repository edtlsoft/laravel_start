<?php

namespace Tests\Unit\Traits;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HasRolesAndPermissionsTraitTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_validate_if_has_permissions()
    {
        $this->withoutExceptionHandling();

        $user = $this->create_user([], [], ['name' => 'permission_one']);

        $response = $user->isAuthorized(['permission_one']);

        $this->assertTrue($response);
    }
}