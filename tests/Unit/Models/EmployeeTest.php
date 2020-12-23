<?php

namespace Tests\Unit\Models;

use App\Models\User;
use App\Models\Employee;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class EmployeeTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function an_employe_belongs_to_a_user()
    {
        $employee = Employee::factory()->make();

        $this->assertInstanceOf(
            User::class,
            $employee->user
        );
    }
}
