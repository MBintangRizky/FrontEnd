<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = [
            [
                'question' => 'What types of jewelry do you sell?',
                'answer' => 'We sell a wide variety of jewelry including rings, necklaces, bracelets, earrings, and more.'
            ],
            [
                'question' => 'Are your jewelry items made of real gold and silver?',
                'answer' => 'Yes, all of our jewelry items are made from real gold, silver, and other precious metals.'
            ],
            [
                'question' => 'Do you offer custom jewelry design?',
                'answer' => 'Yes, we offer custom jewelry design services. You can work with our designers to create a unique piece.'
            ],
            [
                'question' => 'What is your return policy?',
                'answer' => 'We offer a 30-day return policy for all jewelry items. The items must be in their original condition.'
            ],
            [
                'question' => 'How can I take care of my jewelry?',
                'answer' => 'To take care of your jewelry, avoid exposure to harsh chemicals, store it in a dry place, and clean it regularly with a soft cloth.'
            ],
            [
                'question' => 'Do you offer warranties on your jewelry?',
                'answer' => 'Yes, we offer a one-year warranty on all of our jewelry items. The warranty covers manufacturing defects.'
            ],

        ];

        return response()->json($faqs);
    }
}
