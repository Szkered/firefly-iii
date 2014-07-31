<?php
namespace Firefly\Helper\Controllers;

use Illuminate\Database\Eloquent\Collection;

/**
 * Interface BudgetInterface
 *
 * @package Firefly\Helper\Controllers
 */
interface BudgetInterface
{

    /**
     * @param Collection $budgets
     *
     * @return mixed
     */
    public function organizeByDate(Collection $budgets);


    /**
     * @param \Budget $budget
     *
     * @return mixed
     */
    public function organizeRepetitions(\Budget $budget);

    /**
     * @param \Budget $budget
     * @param         $repetitionId
     *
     * @return mixed
     */
    public function organizeRepetition(\Budget $budget, $repetitionId);

    /**
     * @param \Budget $budget
     *
     * @return mixed
     */
    public function outsideRepetitions(\Budget $budget);

} 