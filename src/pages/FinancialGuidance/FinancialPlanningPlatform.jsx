import React, { useState } from 'react';
import styles from '../../css/FinancialPlanningPlatform.module.css';
import AllPageHeader from '../components/AllPageHeader';

const FinancialPlanningPlatform = () => {
  // State for page navigation
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentStep, setCurrentStep] = useState(1);

  // State for Personal Money Plan form
  const [formData, setFormData] = useState({
    salary: 50000,
    otherIncome: 5000,
    goals: ['emergency', 'debt'],
    timeframe: '3',
    housingPercent: 30,
    foodPercent: 15,
    transportPercent: 10,
    savingsPercent: 20,
    totalDebt: 200000,
    currentSavings: 100000,
    emergencyFund: '6',
    email: 'user@example.com'
  });

  // State for Budget Planner tool
  const [budgetData, setBudgetData] = useState({
    income: 55000,
    housingPercent: 30,
    foodPercent: 15,
    transportPercent: 10
  });

  // Calculate derived values
  const totalIncome = formData.salary + formData.otherIncome;
  const housingAmount = Math.round(totalIncome * formData.housingPercent / 100);
  const foodAmount = Math.round(totalIncome * formData.foodPercent / 100);
  const transportAmount = Math.round(totalIncome * formData.transportPercent / 100);
  const savingsAmount = Math.round(totalIncome * formData.savingsPercent / 100);

  const budgetToolHousingAmount = Math.round(budgetData.income * budgetData.housingPercent / 100);
  const budgetToolFoodAmount = Math.round(budgetData.income * budgetData.foodPercent / 100);
  const budgetToolTransportAmount = Math.round(budgetData.income * budgetData.transportPercent / 100);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGoalChange = (goal) => {
    setFormData(prev => {
      const goals = [...prev.goals];
      if (goals.includes(goal)) {
        return { ...prev, goals: goals.filter(g => g !== goal) };
      } else {
        return { ...prev, goals: [...goals, goal] };
      }
    });
  };

  const handleBudgetSliderChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseInt(value)
    }));
  };

  const handleBudgetToolChange = (field, value) => {
    setBudgetData(prev => ({
      ...prev,
      [field]: parseInt(value)
    }));
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetToStep = (step) => {
    setCurrentStep(step);
  };

  const generatePlan = () => {
    alert(`Your personal money plan has been generated and sent to ${formData.email}!`);
    setCurrentStep(5); // Show results page
  };

  // Tool data
  const tools = [
    {
      id: 'budgetPlanner',
      icon: 'fas fa-calculator',
      title: 'Budget Planner',
      description: 'Create and manage your monthly budget with military precision. Allocate resources strategically across categories.',
      features: [
        'Monthly expense tracking',
        'Category-wise allocation',
        'Progress monitoring'
      ]
    },
    {
      id: 'debtCalculator',
      icon: 'fas fa-credit-card',
      title: 'Debt Payoff Calculator',
      description: 'Create a strategic debt elimination plan. Compare snowball vs avalanche methods for optimal payoff.',
      features: [
        'Multiple debt management',
        'Payment strategy comparison',
        'Timeline projection'
      ]
    },
    {
      id: 'investmentPlanner',
      icon: 'fas fa-chart-line',
      title: 'Investment Planner',
      description: 'Plan your investment strategy with risk assessment and return projections. Diversify like a pro.',
      features: [
        'Risk assessment',
        'Portfolio allocation',
        'Return projection'
      ]
    },
    {
      id: 'retirementCalculator',
      icon: 'fas fa-retirement',
      title: 'Retirement Calculator',
      description: 'Plan your post-service life with precision. Calculate how much you need to save for a comfortable retirement.',
      features: [
        'Retirement corpus calculation',
        'Monthly savings target',
        'Inflation adjustment'
      ]
    },
    {
      id: 'mortgageCalculator',
      icon: 'fas fa-home',
      title: 'Mortgage Calculator',
      description: 'Plan your home purchase strategically. Calculate EMIs, compare loan options, and plan your down payment.',
      features: [
        'EMI calculation',
        'Interest vs principal analysis',
        'Prepayment planning'
      ]
    },
    {
      id: 'emergencyFundPlanner',
      icon: 'fas fa-shield-alt',
      title: 'Emergency Fund Planner',
      description: 'Build your financial safety net. Calculate how much you need and create a savings plan.',
      features: [
        'Target calculation',
        'Monthly savings plan',
        'Progress tracking'
      ]
    }
  ];

  return (
    <>
      <AllPageHeader props="Financial Planning Platform" />

      <div className={styles.financialPlatform}>
        {/* LANDING PAGE */}
        {currentPage === 'landing' && (
          <div className={styles.landingPage}>
            <div className={styles.landingContent}>
              <h1 className={styles.landingTitle}>
                Your Service Was Disciplined.<br />Your Money Should Be Too.
              </h1>
              <p className={styles.landingSubtitle}>
                Take control of your financial future today with strategic planning tools designed for disciplined individuals.
              </p>

              <div className={styles.readyBadge}>
                <i className="fas fa-check-circle"></i>
                <span>Your personalised money plan is ready</span>
              </div>

              <div className={styles.landingCtaButtons}>
                <button
                  className={`${styles.landingBtn} ${styles.landingBtnPrimary}`}
                  onClick={() => setCurrentPage('moneyPlan')}
                >
                  <i className="fas fa-chart-line"></i>
                  Generate My Personal Money Plan
                </button>
                <button
                  className={`${styles.landingBtn} ${styles.landingBtnSecondary}`}
                  onClick={() => setCurrentPage('financialTools')}
                >
                  <i className="fas fa-tools"></i>
                  Explore Financial Tools
                </button>
              </div>

              <p className={styles.trustText}>
                Trusted by over 10,000 veterans and disciplined individuals
              </p>
            </div>
          </div>
        )}

        {/* PAGE 1: PERSONAL MONEY PLAN */}
        {currentPage === 'moneyPlan' && (
          <div className={styles.pageContainer}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
              <div>
                <h1 className={styles.pageTitle}>Personal Money Plan Generator</h1>
                <p className={styles.pageSubtitle}>Create your customized financial strategy in 4 simple steps</p>
              </div>
              <button className={styles.backBtn} onClick={() => setCurrentPage('landing')}>
                <i className="fas fa-arrow-left"></i>
                Back to Home
              </button>
            </div>

            {/* Step Wizard */}
            <div className={styles.stepWizard}>
              {[1, 2, 3, 4].map(step => (
                <div
                  key={step}
                  className={`${styles.step} ${step === currentStep ? styles.active : ''} ${step < currentStep ? styles.completed : ''}`}
                >
                  <div className={styles.stepNumber}>{step}</div>
                  <span className={styles.stepLabel}>
                    {step === 1 && 'Income & Goals'}
                    {step === 2 && 'Budget Allocation'}
                    {step === 3 && 'Debt & Savings'}
                    {step === 4 && 'Review Plan'}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Income & Goals */}
            {currentStep === 1 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Step 1: Tell Us About Your Income & Goals</h2>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Monthly Income (After Tax)</label>
                  <div className={styles.incomeRow}>
                    <div>
                      <input
                        type="number"
                        className={styles.formControl}
                        value={formData.salary}
                        onChange={(e) => handleInputChange('salary', parseInt(e.target.value) || 0)}
                      />
                      <small className={styles.textMuted}>Monthly salary</small>
                    </div>
                    <div>
                      <input
                        type="number"
                        className={styles.formControl}
                        value={formData.otherIncome}
                        onChange={(e) => handleInputChange('otherIncome', parseInt(e.target.value) || 0)}
                      />
                      <small className={styles.textMuted}>Side income, investments, etc.</small>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Primary Financial Goals</label>
                  {[
                    { id: 'emergency', label: 'Emergency Fund (3-6 months expenses)' },
                    { id: 'debt', label: 'Debt Reduction' },
                    { id: 'home', label: 'Home Purchase' },
                    { id: 'retirement', label: 'Retirement Planning' },
                    { id: 'education', label: "Children's Education" }
                  ].map(goal => (
                    <div className={styles.formCheck} key={goal.id}>
                      <input
                        className={styles.formCheckInput}
                        type="checkbox"
                        id={goal.id}
                        checked={formData.goals.includes(goal.id)}
                        onChange={() => handleGoalChange(goal.id)}
                      />
                      <label className={styles.formCheckLabel} htmlFor={goal.id}>
                        {goal.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Timeframe for Goals</label>
                  <select
                    className={styles.formSelect}
                    value={formData.timeframe}
                    onChange={(e) => handleInputChange('timeframe', e.target.value)}
                  >
                    <option value="1">Short-term (1-2 years)</option>
                    <option value="3">Medium-term (3-5 years)</option>
                    <option value="10">Long-term (5-10 years)</option>
                  </select>
                </div>

                <div className={styles.formNavigation}>
                  <div></div>
                  <button className={`${styles.navBtn} ${styles.btnNext}`} onClick={nextStep}>
                    Next: Budget Allocation <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Budget Allocation */}
            {currentStep === 2 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Step 2: Budget Allocation</h2>
                <p className={styles.mb4}>Adjust the sliders to allocate your monthly income according to your priorities.</p>

                <div className={styles.budgetCategories}>
                  {[
                    {
                      id: 'housing',
                      name: 'Housing & Utilities',
                      value: formData.housingPercent,
                      min: 20,
                      max: 40,
                      amount: housingAmount
                    },
                    {
                      id: 'food',
                      name: 'Food & Groceries',
                      value: formData.foodPercent,
                      min: 10,
                      max: 25,
                      amount: foodAmount
                    },
                    {
                      id: 'transport',
                      name: 'Transportation',
                      value: formData.transportPercent,
                      min: 5,
                      max: 15,
                      amount: transportAmount
                    },
                    {
                      id: 'savings',
                      name: 'Savings & Investments',
                      value: formData.savingsPercent,
                      min: 15,
                      max: 35,
                      amount: savingsAmount
                    }
                  ].map(category => (
                    <div className={styles.budgetCategory} key={category.id}>
                      <div className={styles.categoryHeader}>
                        <span className={styles.categoryName}>{category.name}</span>
                        <span className={styles.categoryPercentage}>{category.value}%</span>
                      </div>
                      <input
                        type="range"
                        className={styles.budgetSlider}
                        min={category.min}
                        max={category.max}
                        value={category.value}
                        onChange={(e) => handleBudgetSliderChange(`${category.id}Percent`, e.target.value)}
                      />
                      <small className={`${styles.textMuted} ${styles.dBlock} ${styles.mt3}`}>
                        ₹{category.amount.toLocaleString()} monthly
                      </small>
                    </div>
                  ))}
                </div>

                <div className={styles.formNavigation}>
                  <button className={`${styles.navBtn} ${styles.btnPrev}`} onClick={prevStep}>
                    <i className="fas fa-arrow-left"></i> Previous
                  </button>
                  <button className={`${styles.navBtn} ${styles.btnNext}`} onClick={nextStep}>
                    Next: Debt & Savings <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Debt & Savings */}
            {currentStep === 3 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Step 3: Current Debt & Savings</h2>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Current Debt (if any)</label>
                  <input
                    type="number"
                    className={styles.formControl}
                    value={formData.totalDebt}
                    onChange={(e) => handleInputChange('totalDebt', parseInt(e.target.value) || 0)}
                  />
                  <small className={styles.textMuted}>Credit cards, loans, mortgage, etc.</small>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Current Savings</label>
                  <input
                    type="number"
                    className={styles.formControl}
                    value={formData.currentSavings}
                    onChange={(e) => handleInputChange('currentSavings', parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Emergency Fund Target</label>
                  <select
                    className={styles.formSelect}
                    value={formData.emergencyFund}
                    onChange={(e) => handleInputChange('emergencyFund', e.target.value)}
                  >
                    <option value="3">3 months of expenses</option>
                    <option value="6">6 months of expenses</option>
                    <option value="12">12 months of expenses</option>
                  </select>
                </div>

                <div className={styles.formNavigation}>
                  <button className={`${styles.navBtn} ${styles.btnPrev}`} onClick={prevStep}>
                    <i className="fas fa-arrow-left"></i> Previous
                  </button>
                  <button className={`${styles.navBtn} ${styles.btnNext}`} onClick={nextStep}>
                    Next: Review Plan <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Generate */}
            {currentStep === 4 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Step 4: Review Your Plan</h2>

                <div className={styles.planSummary}>
                  <div className={styles.summaryCard}>
                    <h3 className={styles.summaryCardTitle}>Monthly Budget</h3>
                    <div className={styles.summaryValue}>₹{totalIncome.toLocaleString()}</div>
                    <p className={styles.summaryDescription}>Total monthly income after tax</p>
                  </div>

                  <div className={styles.summaryCard}>
                    <h3 className={styles.summaryCardTitle}>Monthly Savings</h3>
                    <div className={styles.summaryValue}>₹{savingsAmount.toLocaleString()}</div>
                    <p className={styles.summaryDescription}>{formData.savingsPercent}% of income allocated to savings</p>
                  </div>

                  <div className={styles.summaryCard}>
                    <h3 className={styles.summaryCardTitle}>Debt Payoff</h3>
                    <div className={styles.summaryValue}>18 months</div>
                    <p className={styles.summaryDescription}>Estimated time to clear all debt</p>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address for Plan Delivery</label>
                  <input
                    type="email"
                    className={styles.formControl}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className={styles.formNavigation}>
                  <button className={`${styles.navBtn} ${styles.btnPrev}`} onClick={prevStep}>
                    <i className="fas fa-arrow-left"></i> Previous
                  </button>
                  <button className={`${styles.navBtn} ${styles.btnGenerate}`} onClick={generatePlan}>
                    <i className="fas fa-magic"></i> Generate My Personal Money Plan
                  </button>
                </div>
              </div>
            )}

            {/* Results Page */}
            {currentStep === 5 && (
              <div className={styles.resultsContainer}>
                <div className={styles.resultsHeader}>
                  <div className={styles.resultsIcon}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h2 className={styles.resultsTitle}>Your Personal Money Plan is Ready!</h2>
                  <p className={styles.resultsSubtitle}>Based on your inputs, here's your customized financial strategy</p>
                </div>

                <div className={styles.planSummary}>
                  <div className={styles.summaryCard}>
                    <h3 className={styles.summaryCardTitle}>Monthly Action Plan</h3>
                    <div className={styles.summaryValue}>₹{totalIncome.toLocaleString()}</div>
                    <p className={styles.summaryDescription}>Total monthly budget allocation</p>
                    <ul className={`${styles.toolFeatures} ${styles.mt3}`}>
                      <li><i className="fas fa-home"></i> Housing: ₹{housingAmount.toLocaleString()} ({formData.housingPercent}%)</li>
                      <li><i className="fas fa-utensils"></i> Food: ₹{foodAmount.toLocaleString()} ({formData.foodPercent}%)</li>
                      <li><i className="fas fa-car"></i> Transport: ₹{transportAmount.toLocaleString()} ({formData.transportPercent}%)</li>
                      <li><i className="fas fa-piggy-bank"></i> Savings: ₹{savingsAmount.toLocaleString()} ({formData.savingsPercent}%)</li>
                    </ul>
                  </div>

                  <div className={styles.summaryCard}>
                    <h3 className={styles.summaryCardTitle}>Debt Elimination</h3>
                    <div className={styles.summaryValue}>₹11,111/month</div>
                    <p className={styles.summaryDescription}>Allocate this amount to clear ₹{formData.totalDebt.toLocaleString()} debt in 18 months</p>
                    <ul className={`${styles.toolFeatures} ${styles.mt3}`}>
                      <li><i className="fas fa-calendar-check"></i> Start date: Next month</li>
                      <li><i className="fas fa-target"></i> Target: Debt-free by Dec 2025</li>
                      <li><i className="fas fa-percentage"></i> Focus on high-interest debt first</li>
                    </ul>
                  </div>

                  <div className={styles.summaryCard}>
                    <h3 className={styles.summaryCardTitle}>Emergency Fund</h3>
                    <div className={styles.summaryValue}>₹99,000</div>
                    <p className={styles.summaryDescription}>Target: {formData.emergencyFund} months of essential expenses</p>
                    <ul className={`${styles.toolFeatures} ${styles.mt3}`}>
                      <li><i className="fas fa-bullseye"></i> Current: ₹{formData.currentSavings.toLocaleString()}</li>
                      <li><i className="fas fa-check-circle"></i> Status: Target Achieved ✓</li>
                      <li><i className="fas fa-shield-alt"></i> Keep in liquid savings account</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.actionItems}>
                  <h3 className={styles.actionTitle}>Your 30-Day Action Plan</h3>
                  <ul className={styles.actionList}>
                    {[
                      {
                        number: 1,
                        title: 'Set Up Automatic Transfers',
                        description: `Automate ₹${savingsAmount} monthly transfer to savings account on salary day`
                      },
                      {
                        number: 2,
                        title: 'Review High-Interest Debt',
                        description: 'List all debts with interest rates above 12% and create payoff plan'
                      },
                      {
                        number: 3,
                        title: 'Track Expenses for 30 Days',
                        description: 'Use our expense tracker to monitor actual spending vs budget'
                      },
                      {
                        number: 4,
                        title: 'Schedule Financial Review',
                        description: 'Set calendar reminder for monthly budget review on 1st of each month'
                      }
                    ].map(action => (
                      <li className={styles.actionItem} key={action.number}>
                        <div className={styles.actionNumber}>{action.number}</div>
                        <div className={styles.actionContent}>
                          <h4>{action.title}</h4>
                          <p>{action.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.textCenter}>
                  <button className={`${styles.navBtn} ${styles.btnPrimary}`} style={{ minWidth: '250px' }}>
                    <i className="fas fa-download"></i> Download Full Plan (PDF)
                  </button>
                  <button className={`${styles.backBtn} ${styles.mt3} ${styles.dInlineBlock}`} onClick={() => resetToStep(1)}>
                    <i className="fas fa-redo"></i> Create Another Plan
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PAGE 2: FINANCIAL TOOLS */}
        {currentPage === 'financialTools' && (
          <div className={styles.pageContainer}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
              <div>
                <h1 className={styles.pageTitle}>Financial Tools Library</h1>
                <p className={styles.pageSubtitle}>Strategic tools for disciplined financial management</p>
              </div>
              <button className={styles.backBtn} onClick={() => setCurrentPage('landing')}>
                <i className="fas fa-arrow-left"></i>
                Back to Home
              </button>
            </div>

            {/* Tools Grid */}
            <div className={styles.toolsContainer}>
              {tools.map(tool => (
                <div
                  key={tool.id}
                  className={styles.toolCard}
                  onClick={() => {
                    if (tool.id === 'budgetPlanner') {
                      // For now, only budget planner has detail view
                      setCurrentPage('budgetPlannerDetail');
                    } else {
                      alert(`${tool.title} - Coming Soon!`);
                    }
                  }}
                >
                  <div className={styles.toolIcon}>
                    <i className={tool.icon}></i>
                  </div>
                  <h3 className={styles.toolTitle}>{tool.title}</h3>
                  <p className={styles.toolDescription}>{tool.description}</p>
                  <ul className={styles.toolFeatures}>
                    {tool.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BUDGET PLANNER DETAIL PAGE */}
        {currentPage === 'budgetPlannerDetail' && (
          <div className={styles.pageContainer}>
            <div className={styles.toolDetail}>
              <div className={styles.toolHeader}>
                <div className={styles.toolHeaderIcon}>
                  <i className="fas fa-calculator"></i>
                </div>
                <div className={styles.toolHeaderContent}>
                  <h2>Budget Planner</h2>
                  <p>Allocate your monthly income with military precision across different spending categories.</p>
                </div>
              </div>

              <div className={styles.calculatorContainer}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Monthly Income (After Tax)</label>
                  <input
                    type="number"
                    className={styles.formControl}
                    value={budgetData.income}
                    onChange={(e) => handleBudgetToolChange('income', parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className={styles.budgetCategories}>
                  {[
                    {
                      id: 'housing',
                      name: 'Housing & Utilities',
                      value: budgetData.housingPercent,
                      min: 20,
                      max: 40,
                      amount: budgetToolHousingAmount
                    },
                    {
                      id: 'food',
                      name: 'Food & Groceries',
                      value: budgetData.foodPercent,
                      min: 10,
                      max: 25,
                      amount: budgetToolFoodAmount
                    },
                    {
                      id: 'transport',
                      name: 'Transportation',
                      value: budgetData.transportPercent,
                      min: 5,
                      max: 15,
                      amount: budgetToolTransportAmount
                    }
                  ].map(category => (
                    <div className={styles.budgetCategory} key={category.id}>
                      <div className={styles.categoryHeader}>
                        <span className={styles.categoryName}>{category.name}</span>
                        <span className={styles.categoryPercentage}>{category.value}%</span>
                      </div>
                      <input
                        type="range"
                        className={styles.budgetSlider}
                        min={category.min}
                        max={category.max}
                        value={category.value}
                        onChange={(e) => handleBudgetToolChange(`${category.id}Percent`, e.target.value)}
                      />
                      <small className={`${styles.textMuted} ${styles.dBlock} ${styles.mt3}`}>
                        ₹{category.amount.toLocaleString()} monthly
                      </small>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.calculatorResult}>
                <h3 className={styles.resultTitle}>Your Monthly Budget Summary</h3>
                <div className={styles.resultValue}>₹{budgetData.income.toLocaleString()}</div>
                <p className={styles.textMuted}>Total monthly allocation across all categories</p>
                <ul className={`${styles.toolFeatures} ${styles.mt3}`}>
                  <li><i className="fas fa-home"></i> Housing & Utilities: ₹{budgetToolHousingAmount.toLocaleString()} ({budgetData.housingPercent}%)</li>
                  <li><i className="fas fa-utensils"></i> Food & Groceries: ₹{budgetToolFoodAmount.toLocaleString()} ({budgetData.foodPercent}%)</li>
                  <li><i className="fas fa-car"></i> Transportation: ₹{budgetToolTransportAmount.toLocaleString()} ({budgetData.transportPercent}%)</li>
                  <li><i className="fas fa-piggy-bank"></i> Remaining for other expenses: ₹{(budgetData.income - budgetToolHousingAmount - budgetToolFoodAmount - budgetToolTransportAmount).toLocaleString()} ({100 - budgetData.housingPercent - budgetData.foodPercent - budgetData.transportPercent}%)</li>
                </ul>
              </div>

              <div className={styles.textCenter}>
                <button className={`${styles.navBtn} ${styles.btnPrimary}`} onClick={() => setCurrentPage('financialTools')}>
                  <i className="fas fa-arrow-left"></i> Back to Tools
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FinancialPlanningPlatform;