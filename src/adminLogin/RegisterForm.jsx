// components/RegisterForm.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock, FaUserShield } from 'react-icons/fa';
import styles from '../css/AdminDashboard.module.css';
import { useGetAllUsersQuery, useRegisterMutation } from '../redux/api';

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'user', // Default as per schema
        permissions: []
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [register] = useRegisterMutation()
   

    // Permission options based on roles
    const permissionOptions = [
        { value: 'read', label: 'Read Access' },
        { value: 'write', label: 'Write Access' },
        { value: 'delete', label: 'Delete Access' },
        { value: 'manage_users', label: 'Manage Users' },
        { value: 'manage_content', label: 'Manage Content' },
        { value: 'view_reports', label: 'View Reports' },
        { value: 'all', label: 'Full Access' }
    ];

    // Role-based permission presets
    const rolePermissions = {
        superadmin: ['all'],
        admin: ['read', 'write', 'delete', 'manage_users', 'view_reports'],
        manager: ['read', 'write', 'manage_content', 'view_reports'],
        user: []
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        // else if (!/(?=.*[A-Z])/.test(formData.password)) {
        //     newErrors.password = 'Password must contain at least one uppercase letter';
        // } else if (!/(?=.*\d)/.test(formData.password)) {
        //     newErrors.password = 'Password must contain at least one number';
        // }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'role') {
            // Auto-set permissions based on role
            const newPermissions = rolePermissions[value] || [];
            setFormData({
                ...formData,
                [name]: value,
                permissions: []
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        // Clear error for this field
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handlePermissionChange = (permission) => {
        const newPermissions = formData.permissions.includes(permission)
            ? formData.permissions.filter(p => p !== permission)
            : [...formData.permissions, permission];

        setFormData({
            ...formData,
            permissions: newPermissions
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        // Prepare data for submission (exclude confirmPassword)
        const { confirmPassword, ...userData } = formData;

        try {
            // Here you would typically make an API call
            console.log('Submitting user data:', userData);

            // Mock API call

            await register(formData)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // On success
            setRegistrationSuccess(true);
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
                role: 'user',
                permissions: []
            });
            setErrors({});

            // Reset success message after 5 seconds
            setTimeout(() => {
                setRegistrationSuccess(false);
            }, 5000);

        } catch (error) {
            setErrors({
                submit: 'Registration failed. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatPhoneNumber = (value) => {
        // Remove all non-digit characters
        const phone = value.replace(/\D/g, '');

        // Format as Indian phone number
        if (phone.length <= 3) {
            return phone;
        } else if (phone.length <= 5) {
            return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
        } else if (phone.length <= 10) {
            return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
        } else {
            return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
        }
    };

    const handlePhoneChange = (e) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setFormData({
            ...formData,
            phone: formattedPhone
        });
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <h2>Create New User Account</h2>
                <p>Register a new user with appropriate role and permissions</p>
            </div>

            {registrationSuccess && (
                <div className={styles.successMessage}>
                    <p>✅ User registered successfully!</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <div className={styles.formGrid}>
                    {/* Name Field */}
                    <div className={styles.formGroup}>
                        <label htmlFor="name">
                            <FaUser className={styles.inputIcon} />
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className={errors.name ? styles.inputError : ''}
                        />
                        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>

                    {/* Email Field */}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">
                            <FaEnvelope className={styles.inputIcon} />
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            className={errors.email ? styles.inputError : ''}
                        />
                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>

                    {/* Phone Field */}
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">
                            <FaPhone className={styles.inputIcon} />
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="(123) 456-7890"
                            maxLength="14"
                            className={errors.phone ? styles.inputError : ''}
                        />
                        <small className={styles.helperText}>
                            Format: (123) 456-7890
                        </small>
                        {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                    {/* Role Selection */}
                    <div className={styles.formGroup}>
                        <label htmlFor="role">
                            <FaUserShield className={styles.inputIcon} />
                            User Role *
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            {/* <option value="user">User</option> */}
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                            {/* <option value="superadmin">Super Admin</option> */}
                        </select>
                        <small className={styles.helperText}>
                            Default role for public registration is "User"
                        </small>
                    </div>

                    {/* Password Field */}
                    <div className={styles.formGroup}>
                        <label htmlFor="password">
                            <FaLock className={styles.inputIcon} />
                            Password *
                        </label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className={errors.password ? styles.inputError : ''}
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password ? (
                            <span className={styles.errorText}>{errors.password}</span>
                        ) : (
                            <small className={styles.helperText}>
                                Min 6 characters, 1 uppercase, 1 number
                            </small>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">
                            <FaLock className={styles.inputIcon} />
                            Confirm Password *
                        </label>
                        <div className={styles.passwordContainer}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                className={errors.confirmPassword ? styles.inputError : ''}
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <span className={styles.errorText}>{errors.confirmPassword}</span>
                        )}
                    </div>
                </div>

                {/* Permissions Section */}
                {/* <div className={styles.permissionsSection}>
                    <h3>User Permissions</h3>
                    <p className={styles.permissionsNote}>
                        Permissions are auto-set based on role. You can manually override them:
                    </p>
                    <div className={styles.permissionsGrid}>
                        {permissionOptions.map(permission => (
                            <div key={permission.value} className={styles.permissionCheckbox}>
                                <input
                                    type="checkbox"
                                    id={`perm-${permission.value}`}
                                    checked={formData.permissions.includes(permission.value)}
                                    onChange={() => handlePermissionChange(permission.value)}
                                    disabled={formData.role === 'superadmin' && permission.value === 'all'}
                                />
                                <label htmlFor={`perm-${permission.value}`}>
                                    {permission.label}
                                    {permission.value === 'all' && formData.role === 'superadmin' && (
                                        <span className={styles.requiredBadge}>Required</span>
                                    )}
                                </label>
                            </div>
                        ))}
                    </div>
                    {formData.role === 'superadmin' && (
                        <div className={styles.roleNote}>
                            ⚠️ Super Admin role automatically gets "Full Access" permission
                        </div>
                    )}
                </div> */}

                {/* Form Actions */}
                <div className={styles.formActions}>
                    <button
                        type="button"
                        className={styles.resetButton}
                        onClick={() => {
                            setFormData({
                                name: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                phone: '',
                                role: 'user',
                                permissions: []
                            });
                            setErrors({});
                        }}
                    >
                        Reset Form
                    </button>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner}></span>
                                Registering...
                            </>
                        ) : (
                            'Register User'
                        )}
                    </button>
                </div>

                {errors.submit && (
                    <div className={styles.submitError}>
                        <p>{errors.submit}</p>
                    </div>
                )}

                <div className={styles.formFooter}>
                    <p className={styles.termsNote}>
                        By registering a user, you agree that this account will be created with the specified permissions and role.
                    </p>
                    <div className={styles.roleSummary}>
                        <h4>Role Summary:</h4>
                        <ul>
                            <li><strong>User:</strong> Basic access, no permissions</li>
                            <li><strong>Manager:</strong> Can read, write, and manage content</li>
                            <li><strong>Admin:</strong> Full management except user permissions</li>
                            <li><strong>Super Admin:</strong> Complete system access</li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;