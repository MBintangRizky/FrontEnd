<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class Admin
{
    public function handle(Request $request, Closure $next): Response
    {
        try {
            // Attempt to authenticate the user and get the token payload
            $user = JWTAuth::parseToken()->authenticate();

            // Check if the user's role is 'admin'
            if ($user && $user->role === 'admin') {
                // If the user's role is 'admin', proceed with the request
                return $next($request);
            } else {
                // If the user's role is not 'admin', return a 401 Unauthorized response
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (Exception $e) {
            // If there is an exception (e.g., token invalid or not present), return a 401 Unauthorized response
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
